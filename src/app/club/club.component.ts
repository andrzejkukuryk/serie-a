import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { Club } from '../../models/club';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrl: './club.component.scss',
})
export class ClubComponent {
  @Input() club?: Club;

  constructor(private clubService: ClubService) {
    this.clubService.selectedClub.get().subscribe((clubId) => {
      this.isExpanded = this.club?.id === clubId;
      this.clubIsSelected = !!clubId;
    });
  }
  private clubIsSelected = false;
  public isExpanded = false;
  public showDetails = false;

  handleClick(): void {
    if (this.club && !this.clubIsSelected) {
      this.clubService.selectedClub.set(this.club.id);
      this.clubService.menu.closeMenu();
    }
    if (this.isExpanded) {
      this.showDetails = true;
    }
  }
  closeDetails(): void {
    this.clubService.selectedClub.clear();

    this.showDetails = false;
  }
}
