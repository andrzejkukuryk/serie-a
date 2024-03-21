import { SeasonGoal } from './seasonGoal';

export interface Club {
  name: string;
  logo: string;
  city: string;
  colors: string[];
  seasonGoal: SeasonGoal;
}
