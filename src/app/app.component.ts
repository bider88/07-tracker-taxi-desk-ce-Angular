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

  init: boolean = false;

  list: Subscription;

  drivers: Array<Driver>;
  focusOn: string = null;
  focusOnName: string = null;

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

        if ( this.focusOn ) {
          this.drivers.forEach( driver => {
            if (driver.key === this.focusOn) {
              this.lat = driver.lat;
              this.lng = driver.lng;
            }
          });
        }
      }
    );
  }

  focusOnDriver(driver: Driver) {
    this.focusOn = driver.key;
    this.focusOnName = driver.name;

    this.lat = driver.lat;
    this.lng = driver.lng;
  }

  missFocusOnDriver() {
    this.focusOn = null;
    this.focusOnName = null;
  }
}

interface Driver {
  name: string;
  key: string;
  lat?: number;
  lng?: number;
}
