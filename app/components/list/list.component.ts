import { AfterViewChecked, Component } from '@angular/core';
import * as Toast from 'nativescript-toast';
import { Observable } from 'rxjs';
import { User } from '~/models/user';
import { FirestoreProvider } from '~/services/firestore/firestore';

declare var com: any;

@Component({
  selector: 'app-components/list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class ListComponent implements AfterViewChecked {

  public users: Observable<Array<User>>;

  constructor(
    private firestore: FirestoreProvider
  ) {
    this.users = this.firestore.getAllUsers();
  }

  ngAfterViewChecked() {
    var now = new Date().getTime();
    var startTime = now - com.moventes.moventest.nativescript.Timer.start;
    var toast = Toast.makeText('DEBUG -- ListComponent.ngAfterViewChecked -- ' + com.moventes.moventest.nativescript.Timer.start + ' -- ' + now + ' -- ' + startTime);
    toast.show();
  }

}
