import { Component, Input } from '@angular/core';
import { Club } from '../../models/club';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrl: './club.component.scss',
})
export class ClubComponent {
  @Input() club?: Club;
}
