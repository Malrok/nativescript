import { Injectable, NgZone } from '@angular/core';
import * as firebase from "nativescript-plugin-firebase";
import { Observable } from 'rxjs';
import { UserFactory } from '~/models/factories/user.factory';
import { User } from '~/models/user';

@Injectable()
export class FirestoreProvider {

  constructor(
    private ngZone: NgZone
  ) { }

  getAllUsers(): Observable<Array<User>> {
    var usersData = [];

    return Observable.create(subscriber => {
      firebase.firestore.collection('users').limit(10).onSnapshot((snapshot: firebase.firestore.QuerySnapshot) => {
        snapshot.forEach(user => {
          usersData.push(UserFactory.fromDocument(user));
          this.ngZone.run(() => {
            subscriber.next(usersData);
          });
        });
      });
    });
  }

  getUserById(id: string): firebase.firestore.DocumentReference {
    return firebase.firestore.doc(`users/${id}`)
  }

  // saveUser(formGroup: FormGroup): Promise<void> {
  //   let id = formGroup.controls.id.value;
  //   if (!id) {
  //     id = firebase.firestore.createId();
  //     formGroup.controls.id.patchValue(id);
  //   };
  //   return firebase.firestore.doc<User>(`users/${id}`).set(UserFactory.toDocument(formGroup));
  // }

}
