import { Component } from '@angular/core';
import { Club } from '../models/club';
import { ClubService } from './club.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Serie A';
  clubs: Club[] = [];

  constructor(private clubsService: ClubService) {}

  getClubs(): void {
    this.clubs = this.clubsService.getClubs();
  }
  ngOnInit(): void {
    this.getClubs();
  }
}
