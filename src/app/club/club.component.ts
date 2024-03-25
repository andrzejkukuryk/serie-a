import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { Club } from '../../models/club';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrl: './club.component.scss',
})
export class ClubComponent {
  @Input() club?: Club;
  public isExpanded = false;
  public showDetails = false;

  handleClick(): void {
    this.isExpanded = true;

    setTimeout(() => {
      this.showDetails = true;
    }, 200);
  }
  closeDetails(): void {
    // this.hide();
    this.isExpanded = false;
  }

  collapse(): void {
    this.isExpanded = false;
  }
}
