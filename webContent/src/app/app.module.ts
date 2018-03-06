import { BrowserModule } from '@angular/platform-browser';
import { NgModule , ErrorHandler} from '@angular/core';
import Raven = require('raven-js');

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

// Raven
//   .config('https://9d475eac2ce84a8583211797c3b58086@sentry.io/295138')
//   .install();

// export class RavenErrorHandler implements ErrorHandler {
//   handleError(err:any) : void {
//     Raven.captureException(err);
//   }
// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule
  ],
 // providers: [{ provide: ErrorHandler, useClass: RavenErrorHandler } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
