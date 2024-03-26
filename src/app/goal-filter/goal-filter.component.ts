import { Component } from '@angular/core';
import { SeasonGoal, seasonGoals } from '../../models/seasonGoal';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-goal-filter',
  templateUrl: './goal-filter.component.html',
  styleUrl: './goal-filter.component.scss',
})
export class GoalFilterComponent {
  constructor(public clubService: ClubService) {}
  seasonGoals = seasonGoals;
  selectedGoal: SeasonGoal | undefined;
  handleChange(value: any) {
    console.log(value);
  }
  // filterByGoal;
}
