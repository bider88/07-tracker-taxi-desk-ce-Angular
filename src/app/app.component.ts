import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;
  list: Subscription;
  drivers: Array<Driver>;
  init: boolean = false;

  constructor(
    private _userService: UserService
  ) {}

  ngOnInit() {
    this.getDrivers();
  }

  getDrivers() {
    this.list = this._userService.drivers.subscribe(
      ( drivers: Driver[] ) => {
        this.drivers = drivers;
        if ( !this.init ) {
          this.lat = this.drivers[0].lat;
          this.lng = this.drivers[0].lng;
          this.init = true;
        }
      }
    );
  }
}

interface Driver {
  name: string;
  key: string;
  lat?: number;
  lng?: number;
}
