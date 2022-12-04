import { Injectable, EventEmitter } from '@angular/core';

export enum LINK {
  HOME = 'home',
  ABOUT = 'about',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  CONTACT = 'contact',
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  navEvent: EventEmitter<LINK> = new EventEmitter();
  constructor() {}
}
