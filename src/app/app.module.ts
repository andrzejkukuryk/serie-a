import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlagComponent } from './flag/flag.component';
import { ClubComponent } from './club/club.component';
import { DetailsComponent } from './details/details.component';
import { GoalFilterComponent } from './goal-filter/goal-filter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuButtonComponent } from './menu-button/menu-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FlagComponent,
    ClubComponent,
    DetailsComponent,
    GoalFilterComponent,
    MenuButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
