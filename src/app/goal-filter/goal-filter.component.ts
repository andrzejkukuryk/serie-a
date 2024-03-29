import { Component } from '@angular/core';
import { seasonGoals } from '../../models/seasonGoal';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-goal-filter',
  templateUrl: './goal-filter.component.html',
  styleUrl: './goal-filter.component.scss',
})
export class GoalFilterComponent {
  constructor(public clubService: ClubService) {}
  menuIsOpen: boolean = false;
  seasonGoals = seasonGoals;
  selectedGoal: string = 'scudetto';
  selectedFilter: string = 'all';
  setFilter(term: string): void {
    this.selectedFilter = term;
    this.filterClubs();
  }

  filterClubs(): void {
    if (this.selectedFilter === 'all') {
      this.clubService.setAllClubs();
      return;
    }
    this.clubService.filter(this.selectedFilter);
  }

  ngOnInit() {
    this.clubService.menu.menuIsOpen$.subscribe(
      (isOpen) => (this.menuIsOpen = isOpen)
    );
  }
}
