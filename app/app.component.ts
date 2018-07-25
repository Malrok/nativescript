import { Component, OnInit } from "@angular/core";
import * as firebase from "nativescript-plugin-firebase";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My App" class="action-bar"></ActionBar>
    <StackLayout>
      <router-outlet></router-outlet>
    </StackLayout>
  `
})
export class AppComponent implements OnInit {
  // Your TypeScript logic goes here

  ngOnInit() {
    firebase.init({
      // Optionally pass in properties for database, authentication and cloud messaging,
      // see their respective docs.
      persist: false,
      storageBucket: 'gs://cross-platform-test.appspot.com',
      onAuthStateChanged: (data: any) => {
        console.log(JSON.stringify(data));
        // if (data.loggedIn) {
        //   AuthService.uid = data.user.uid;
        // }
      }
    }).then(
      instance => {
        console.log("firebase.init done");
      },
      error => {
        console.log(`firebase.init error: ${error}`);
      }
    );
  }
}
