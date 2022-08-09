import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VecnaButtonModule } from "@vecna/core";

import { VecnaAddonDocMainModule } from '@vecna/addon-doc';
import { AppComponent } from './app.component';
import { APP_PROVIDERS } from "./app.provider";
import { AppRoutingModule } from "./app.routes";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VecnaButtonModule,
    VecnaAddonDocMainModule,
    AppRoutingModule,
  ],
  providers: APP_PROVIDERS,
})
export class AppModule { }
