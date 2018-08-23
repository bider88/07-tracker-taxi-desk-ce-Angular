import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  drivers: Observable<any[]>;

  constructor(
    private afDB: AngularFirestore
  ) {
    this.getDrivers();
   }

  getDrivers() {
    return this.drivers = this.afDB.collection('users').valueChanges();
  }
}
