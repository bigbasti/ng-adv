import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UxControlsModule } from '../../../ux-lib/projects/ux-controls/src/lib/ux-controls.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UxControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
