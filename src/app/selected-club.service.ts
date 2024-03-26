import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedClubService {
  private selectedClub: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  set(id: string): void {
    this.selectedClub.next(id);
  }
  get(): Observable<string> {
    return this.selectedClub.asObservable();
  }
  clear(): void {
    this.selectedClub.next('');
  }
}
