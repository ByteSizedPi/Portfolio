import { EventEmitter, Injectable } from '@angular/core';
import { filter } from 'rxjs';

export type LINK = 'home' | 'about' | 'skills' | 'projects' | 'contact';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  navEvent: EventEmitter<LINK> = new EventEmitter();
  ifNav = (link: LINK) => this.navEvent.pipe(filter((l) => l === link));
}
