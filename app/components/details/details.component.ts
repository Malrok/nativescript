import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as firebase from "nativescript-plugin-firebase";
import { UserFactory } from '~/models/factories/user.factory';
import { User } from '~/models/user';
import { FirestoreProvider } from '~/services/firestore/firestore';

@Component({
  selector: 'app-components/details',
  templateUrl: './components/details/details.component.html',
  styleUrls: ['./components/details/details.component.scss']
})
export class DetailsComponent {

  public formGroup: FormGroup;

  // private id: string;

  constructor(
    private route: ActivatedRoute,
    private firestore: FirestoreProvider,
    private fb: FormBuilder
  ) {
    console.log('yes');
    this.formGroup = this.fb.group({
      id: [''],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      description: [''],
      email: ['', [Validators.required, Validators.email]],
      picture: [''],
      address: ['']
    });
  }

  ngOnInit() {
    this.route.params
      .forEach((params) => {
        const id = params['id'];
        // const id = this.navParams.get('id');
        if (id === 'new') {
          this.setFormGroupValues(UserFactory.newInstance());
        } else {
          console.log('yurp');
          this.firestore.getUserById(id).then((snapshot: firebase.firestore.DocumentSnapshot) => {
            this.setFormGroupValues(UserFactory.fromDocument(snapshot));
          });
        }
      });
  }

  // private createFormGroup() {
  //   this.formGroup = this.fb.group({
  //     id: [''],
  //     first_name: ['', Validators.required],
  //     last_name: ['', Validators.required],
  //     description: [''],
  //     email: ['', [Validators.required, Validators.email]],
  //     picture: [''],
  //     address: ['']
  //   });
  // }

  private setFormGroupValues(user: User) {
    this.formGroup.patchValue({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      description: user.description,
      email: user.email,
      picture: user.picture,
      address: user.address
    });
  }

}
