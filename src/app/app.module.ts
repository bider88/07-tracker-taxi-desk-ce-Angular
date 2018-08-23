import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// AGM
import { AgmCoreModule } from '@agm/core';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { config } from './config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: config.apiKey
    }),
    AngularFireModule.initializeApp(config.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
