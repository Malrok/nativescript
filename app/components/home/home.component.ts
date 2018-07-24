import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable as RxObservable } from 'rxjs';
import { User } from '~/models/user';
import { FirestoreProvider } from '~/services/firestore/firestore';

@Component({
  moduleId: module.id,
  selector: 'app-components/home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  public users: RxObservable<Array<User>>;

  constructor(
    private firestore: FirestoreProvider
  ) {
    this.users = this.firestore.getAllUsers();
  }

  onUserSelect(event: Event) {
    console.log(event);
  }
}
