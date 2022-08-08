import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VecnaButtonModule } from "@vecna/core";

import { VecnaAddonDocMainModule } from '@vecna/addon-doc';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VecnaButtonModule,
    VecnaAddonDocMainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
