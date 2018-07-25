import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable as RxObservable } from 'rxjs';
import { User } from '~/models/user';
import { FirestoreProvider } from '~/services/firestore/firestore';

@Component({
  selector: 'app-components/home',
  templateUrl: './components/home/home.component.html',
  styleUrls: ['./components/home/home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  public users: RxObservable<Array<User>>;

  constructor(
    private firestore: FirestoreProvider,
    private router: Router
  ) {
    this.users = this.firestore.getAllUsers();
  }

  onUserSelect(item: User) {
    // console.log(item);
    this.router.navigate(["/details", item.id]);
  }
}
