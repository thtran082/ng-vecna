import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VecnaButtonModule } from "@vecna/core";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VecnaButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
