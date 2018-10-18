
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptLocalizeModule } from "nativescript-localize/angular";
import { AddressAutocompleteComponent } from '~/components/address-autocomplete/address-autocomplete';
import { AddressAutocompleteModalComponent } from '~/components/address-autocomplete/address-autocomplete-modal';
import { ListComponent } from '~/components/list/list.component';
import { GeocodingProvider } from '~/services/geocoding/geocoding';
import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { FirestoreProvider } from './services/firestore/firestore';

const routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: '', component: ListComponent
      },
      {
        path: 'details/:id', component: DetailsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    DetailsComponent,
    AddressAutocompleteComponent,
    AddressAutocompleteModalComponent
  ],
  entryComponents: [
    AddressAutocompleteModalComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    NativeScriptFormsModule,
    NativeScriptLocalizeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    FirestoreProvider,
    ModalDialogService,
    GeocodingProvider
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule { }
