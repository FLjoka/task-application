import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showTask: boolean = false;
  private subjet = new Subject();

  constructor() {}

  toggleAddTask(): void {
    console.log('toggleAddTask');

    this.showTask = !this.showTask;
    this.subjet.next(this.showTask);
  }

  onToggle(): Observable<any> {
    return this.subjet.asObservable();
  }
}
