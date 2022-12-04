import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  prevLink: number = 0;
  navOpen: boolean = false;

  links = [
    { text: 'home', isActive: true },
    { text: 'about', isActive: false },
    { text: 'skills', isActive: false },
    { text: 'projects', isActive: false },
    { text: 'contact', isActive: false },
  ];

  constructor(public nav: NavigationService) {
    this.nav.navEvent.subscribe((link) => {
      this.setActive(2);
      console.log('hello');
    });
  }

  setActive(index: number) {
    this.links[this.prevLink].isActive = false;
    this.links[(this.prevLink = index)].isActive = true;
  }
}
