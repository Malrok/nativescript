import { Injectable, NgZone } from '@angular/core';
import * as firebase from "nativescript-plugin-firebase";
import { UploadFileResult } from 'nativescript-plugin-firebase/storage/storage';
import { Observable } from 'rxjs';
import { ImageAsset } from 'tns-core-modules/image-asset/image-asset';
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

  // getUserById(id: string): Observable<User> {
  //   return Observable.create(subscriber => {
  //     firebase.firestore.doc(`users/${id}`).onSnapshot((snapshot: firebase.firestore.DocumentSnapshot) => {
  //       this.ngZone.run(() => {
  //         subscriber.next(snapshot);
  //       });
  //     });
  //   });
  // }
  getUserById(id: string): Promise<firebase.firestore.DocumentSnapshot> {
    return firebase.firestore.collection('users').doc(id).get();
  }

  // saveUser(formGroup: FormGroup): Promise<void> {
  //   let id = formGroup.controls.id.value;
  //   if (!id) {
  //     id = firebase.firestore.createId();
  //     formGroup.controls.id.patchValue(id);
  //   };
  //   return firebase.firestore.doc<User>(`users/${id}`).set(UserFactory.toDocument(formGroup));
  // }

  public uploadFile(imageAsset: ImageAsset): Promise<string> {
    return new Promise((resolve, reject) => {
      let filename: string;
      const filepath = imageAsset.android;
      // if (isAndroid) {
      filename = filepath.split('/').pop();
      // } else {
      // if (imageAsset.ios && imageAsset.ios.mediaType === PHAssetMediaType.Image) {
      //     const opt = PHImageRequestOptions.new();
      //     opt.version = PHImageRequestOptionsVersion.Current;
      //     PHImageManager.defaultManager().requestImageDataForAssetOptionsResultHandler(
      //         ios, opt, (imageData: NSData, dataUTI: string, orientation: UIImageOrientation, info: NSDictionary<any, any>) => {
      //             console.log(info.objectForKey("PHImageFileURLKey").toString());
      //         });
      // }
      // }
      firebase.storage.uploadFile({
        remoteFullPath: `avatars/${filename}`,
        localFullPath: filepath,
        onProgress: function (status) {
          console.log("Uploaded fraction: " + status.fractionCompleted);
          console.log("Percentage complete: " + status.percentageCompleted);
        }
      }).then(
        (uploadedFile: UploadFileResult) => {
          firebase.storage.getDownloadUrl({
            remoteFullPath: `avatars/${filename}`
          }).then((url) => resolve(url), err => reject(err))
        }, err => reject(err));
    });
  }

}
