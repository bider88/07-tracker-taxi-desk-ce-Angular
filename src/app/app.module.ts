import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// AGM
import { AgmCoreModule } from '@agm/core';

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
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
