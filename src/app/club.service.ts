import { Injectable } from '@angular/core';
import { clubs } from '../data/clubs';
import { Club } from '../models/club';
import { SelectedClubService } from './selected-club.service';
import { Observable, of, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ClubService {
  private currentClubsSubject: BehaviorSubject<Club[]> = new BehaviorSubject<
    Club[]
  >([]);
  currentClubs$: Observable<Club[]> = this.currentClubsSubject.asObservable();
  setAllClubs(): void {
    this.getClubs().subscribe((clubs) => this.currentClubsSubject.next(clubs));
  }
  getClubs(): Observable<Club[]> {
    return of(clubs);
  }
  filter(term: string): void {
    const filteredClubs = clubs.filter((club) => club.seasonGoal === term);
    this.currentClubsSubject.next(filteredClubs);
  }
  constructor(public selectedClub: SelectedClubService) {
    this.setAllClubs();
  }
}
