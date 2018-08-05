import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable as RxObservable } from 'rxjs';
import { User } from '~/models/user';
import { FirestoreProvider } from '~/services/firestore/firestore';

@Component({
  selector: 'app-components/list',
  templateUrl: './components/list/list.component.html',
  styleUrls: ['./components/list/list.component.scss']
})
export class ListComponent {

  public users: RxObservable<Array<User>>;

  constructor(
    private firestore: FirestoreProvider,
    private router: Router
  ) {
    this.users = this.firestore.getAllUsers();
  }

  onUserSelect(item: User) {
    this.router.navigate(["/details", item.id]);
  }
}
