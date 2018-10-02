import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const LATITUDE = '$LATITUDE';
const LONGITUDE = '$LONGITUDE';
const URL = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + LATITUDE + ',' + LONGITUDE + '&sensor=true';

@Injectable({
  providedIn: 'root'
})
export class GeocodingProvider {

  constructor(
    private http: HttpClient
  ) {
  }

  public geocode(): Promise<any> {
    return null;
  }

  public reverseGeocode(latitude: number, longitude: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(URL.replace(LATITUDE, String(latitude)).replace(LONGITUDE, String(longitude)))
        .pipe(
          map((results: any) => results.json())
        ).subscribe(results => {
          console.log('address ' + results.results[0].formatted_address);
          resolve(results.results[0].formatted_address);
        }, error => {
          console.log('ERROR: ', error);
          reject(error);
        });
    });
  }

}