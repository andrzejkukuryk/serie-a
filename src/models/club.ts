import { SeasonGoal } from './seasonGoal';

export interface Club {
  id: string;
  name: string;
  logo: string;
  city: string;
  colors: string[];
  seasonGoal: SeasonGoal;
}
