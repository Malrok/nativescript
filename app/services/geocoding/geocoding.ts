import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GooglePlacesAutocomplete } from 'nativescript-google-places-autocomplete';

const LATITUDE = '$LATITUDE';
const LONGITUDE = '$LONGITUDE';
const ADDRESS = '$ADDRESS';
const API_KEY = 'AIzaSyCJhO9SPTit2418hkttbpn_KFxL-G3yyPM';
const GEOCODE_POSITION_URL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + LATITUDE + ',' + LONGITUDE + '&sensor=true&key=' + API_KEY;
const GEOCODE_ADDRESS_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + ADDRESS + '&key=' + API_KEY;

@Injectable({
  providedIn: 'root'
})
export class GeocodingProvider {

  constructor(
    private http: HttpClient
  ) {
  }

  public search(address: string): Promise<any> {
    let googlePlacesAutocomplete = new GooglePlacesAutocomplete(API_KEY);
    return googlePlacesAutocomplete.search(address);
  }

  public geocode(address: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(GEOCODE_ADDRESS_URL.replace(ADDRESS, address))
        .subscribe(
          (results: any) => {
            resolve(results.results[0]);
          },
          error => {
            console.log('[geocode] -- ERROR: ', error);
            reject(error);
          });
    });
  }

  public reverseGeocode(latitude: number, longitude: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(GEOCODE_POSITION_URL.replace(LATITUDE, String(latitude)).replace(LONGITUDE, String(longitude)))
        .subscribe(
          (results: any) => resolve(results.results[0].formatted_address),
          error => {
            console.log('[reverseGeocode] -- ERROR: ', error);
            reject(error);
          });
    });
  }

}