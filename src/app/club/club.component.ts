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
  public expanded = false;

  @ViewChild('clubContainer') clubContainer!: ElementRef;

  constructor(private renderer: Renderer2) {}

  setPositionAbsolute() {
    const container = this.clubContainer.nativeElement;

    const rect = container.getBoundingClientRect();
    const left = rect.left;
    const top = rect.top;
    // debugger;
    console.log(rect.left, top);

    this.renderer.setStyle(container, 'position', 'absolute');
    this.renderer.setStyle(container, 'left', `${left}px`);
    this.renderer.setStyle(container, 'top', `${top}px`);

    console.log(rect);
  }

  handleClick(): void {
    this.setPositionAbsolute();
    this.expanded = true;
  }
}
