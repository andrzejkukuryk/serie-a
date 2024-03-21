import { Injectable } from '@angular/core';
import { clubs } from '../data/clubs';
import { Club } from '../models/club';

@Injectable({
  providedIn: 'root',
})
export class ClubService {
  getClubs(): Club[] {
    return clubs;
  }

  constructor() {}
}
