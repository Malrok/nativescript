import { Component, forwardRef, NgZone } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import { TextField } from "tns-core-modules/ui/text-field";
import { GeocodingProvider } from '~/services/geocoding/geocoding';
import { Address } from '../../models/address';

/**
 * Component providing a searchbar input which autocomplete returned by Google Maps API
 */
@Component({
  selector: 'mv-address-autocomplete-modal',
  templateUrl: './components/address-autocomplete/address-autocomplete-modal.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressAutocompleteModalComponent),
      multi: true
    }
  ]
})
export class AddressAutocompleteModalComponent implements ControlValueAccessor {

  /**
   * Boolean that indicates if the "custom address he typed could be presented on the list"
   */
  allowCustom: boolean;

  /**
   * Boolean that indicates if user can validate the "custom address he typed or not"
   */
  customEnabled: boolean;

  /**
   * The component needs a label option to fill the placeholder
   */
  label: string;


  /**
   * The component needs a model (ngModel od formControlName) option that will store the returned address
   */
  private _addressValue: Address;

  /**
   * {string} Address formatted as it will appear in the dom
   */
  private _displayedAddressValue = '';

  /**
   * True if the input address will be used as is
   */
  private useInputAddress: boolean;

  /**
   * Results received from Google services
   */
  public results = [];

  private get addressValue(): Address {
    return this._addressValue;
  }

  private set addressValue(val: Address) {
    this.ngZone.run(() => {
      this._addressValue = val;
      this.propagateChange(this._addressValue);
    });
  }

  private get displayedAddressValue() {
    return this._displayedAddressValue;
  }

  private set displayedAddressValue(val) {
    this.ngZone.run(() => {
      this._displayedAddressValue = val;
    });
  }

  constructor(
    private ngZone: NgZone,
    private params: ModalDialogParams,
    private geocoder: GeocodingProvider
  ) { }

  ionViewDidEnter() {
    this.label = this.params.context.label;
    this.allowCustom = this.params.context.allowCustom;
    this.customEnabled = false;
    // setTimeout(() => {
    //   this.searchBar.setFocus();
    // }, 500);
  }

  /**
   * Empties the propositions list.
   * Called before its filling or when there are not results from Google services
   */
  private setList(results = null) {
    this.ngZone.run(() => {
      this.results = results || [];
    });
  }

  /**
   * This method is part of ControlValueAccessor interface.
   * Its role is to set value from the model to the DOM
   *
   * @param value Value given from the model
   */
  public writeValue(value: any) {
    if (value && value.formattedAddress) {
      this.displayedAddressValue = value.formattedAddress;
    } else {
      this.displayedAddressValue = null;
    }
  }

  /**
   * When the input loses the focus, this method is called to hide the propositions list.
   */
  public onBlur() {
    // we need a timeout to prevent list from being emptied before the click event is emitted
    setTimeout(() => this.setList(), 300);
  }

  /**
  * When user type something in the searchbar,
  * this method updates the formatted address of the address model.
  * This also calls the method responsible of filling the propositions list with AutocompleteService.
  */
  public inputOnSearchbar(args, disableCustom: boolean) {
    let textField = <TextField>args.object;
    this.displayedAddressValue = textField.text;
    if (this.displayedAddressValue) {
      this.addressValue = {
        formattedAddress: this.displayedAddressValue
      };
    } else {
      this.addressValue = null;
    }
    if (this.customEnabled && disableCustom) {
      this.customEnabled = false;
    } else {
      // Nothing to do...
    }
    if (this.addressValue) {
      this.useAutocompleteservice();
    } else {
      this.setList();
    }
  }

  /**
   * This method calls the autocomplete service to get predictions based on the input value.
   * If there are some results, they wil fill the propositions list.
   * Else, Google geocoding will be called
   */
  private useAutocompleteservice() {
    this.useInputAddress = false;
    if (this.displayedAddressValue === '') {
      this.setList();
      return;
    }

    this.geocoder.search(this.displayedAddressValue)
      .then((places) => {
        console.log('useAutocompleteservice', places);
        if (places && places.length > 0) {
          this.setList(places);
          this.ngZone.run(() => {
            if (!this.customEnabled) {
              this.customEnabled = true;
            } else {
              // Nothing to do...
            }
          });
        }
      });
  }

  /**
   * This method is called when the user validates input without any result,
   * the address only contains the formatted address entered in the search bar
   */
  selectCustomAddress() {
    this.params.closeCallback(this.addressValue);
  }

  /**
   * This method is called when user select a proposition in the list.
   * The Google PlaceService is called to get precise informations about this place.
   * the address object is built with those informations.
   *
   * @param item Selected item from propositon list
   */
  public selectSearchResult(item) {
    this.geocoder.geocode(item.data.description).then((result) => {
      console.log('[selectSearchResult] -- result: ', result.geometry);
      this.addressValue = {
        latitude: result.geometry.location.lat,
        longitude: result.geometry.location.lng,
        formattedAddress: item.description || item.formatted_address,
        googlePlaceId: item.place_id
      };
      this.params.closeCallback(this.addressValue);
    });
  }

  closeModal() {
    this.params.closeCallback();
  }

  /**
   * This method is part of ControlValueAccessor interface.
   * Its role is to set the function that will propagate changes from the DOM to the model.
   *
   * @param fn {function} Angular internal function
   */
  public registerOnChange(fn) {
    this.propagateChange = fn;
  }

  /**
   * This method is part of ControlValueAccessor interface.
   * Not used here
   */
  public registerOnTouched(): void { }

  /**
   * Container for the propagation function.
   */
  public propagateChange = (_: any) => { };
}
