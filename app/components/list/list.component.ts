import { AfterViewChecked, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '~/models/user';
import { FirestoreProvider } from '~/services/firestore/firestore';

@Component({
  selector: 'app-components/list',
  templateUrl: './components/list/list.component.html',
  styleUrls: ['./components/list/list.component.scss']
})
export class ListComponent implements AfterViewChecked {

  public users: Observable<Array<User>>;

  constructor(
    private firestore: FirestoreProvider
  ) {
    this.users = this.firestore.getAllUsers();
  }

  ngAfterViewChecked() {
    console.log('DEBUG -- ListComponent.ngAfterViewChecked -- ' + new Date().getTime());
  }

}
