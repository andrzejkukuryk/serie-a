import { Component, Input } from '@angular/core';
import { Club } from '../../models/club';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  @Input() club!: Club;
}
