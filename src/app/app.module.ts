import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularResizeElementModule } from 'angular-resize-element';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularResizeElementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
