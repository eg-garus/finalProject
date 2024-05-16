import {  NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA} from '@angular/compiler';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
