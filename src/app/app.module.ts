import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlagComponent } from './flag/flag.component';
import { ClubComponent } from './club/club.component';

@NgModule({
  declarations: [
    AppComponent,
    FlagComponent,
    ClubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
