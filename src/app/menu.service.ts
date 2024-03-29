import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuIsOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );
  menuIsOpen$: Observable<boolean> = this.menuIsOpenSubject.asObservable();

  openMenu(): void {
    this.menuIsOpenSubject.next(true);
  }

  closeMenu(): void {
    this.menuIsOpenSubject.next(false);
    this.menuIsOpen$.subscribe((isOpen) => console.log('isOpen', isOpen));
  }
}
