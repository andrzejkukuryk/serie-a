import { Component } from '@angular/core';
import { MenuService } from '../menu.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss',
})
export class MenuButtonComponent {
  constructor(private menu: MenuService) {}
  isOpen: boolean = false;

  openMenu(): void {
    this.menu.openMenu();
  }

  closeMenu(): void {
    this.menu.closeMenu();
  }

  ngOnInit(): void {
    this.menu.menuIsOpen$.subscribe((menuIsOpen) => (this.isOpen = menuIsOpen));
  }
}
