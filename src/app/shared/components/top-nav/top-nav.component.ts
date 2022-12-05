import { Component, OnInit } from '@angular/core';
import { LINK, NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  prevLink: LINK = LINK.HOME;
  navOpen: boolean = false;

  links = new Map<LINK, boolean>()
    .set(LINK.HOME, true)
    .set(LINK.ABOUT, false)
    .set(LINK.PROJECTS, false)
    .set(LINK.CONTACT, false);

  constructor(public nav: NavigationService) {
    this.nav.navEvent.subscribe(this.setActive.bind(this));
  }

  getLinks() {
    return Array.from(this.links);
  }

  setActive(index: LINK) {
    this.links.set(this.prevLink, false);
    this.links.set((this.prevLink = index), true);
  }
}
