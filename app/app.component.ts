import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import * as firebase from "nativescript-plugin-firebase";
import { Page } from "ui/page";


@Component({
  selector: "my-app",
  template: `
    <StackLayout>
      <router-outlet></router-outlet>
    </StackLayout>
  `
})
export class AppComponent implements OnInit {

  constructor(page: Page) {
    page.actionBarHidden = true;
  }

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

registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);
