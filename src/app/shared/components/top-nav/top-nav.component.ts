import { Component, OnInit } from '@angular/core';
import { Utils } from '../../models/Utils';
import { LINK, NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent extends Utils {
  Array = Array;
  prevLink: LINK = LINK.HOME;
  navOpen: boolean = false;

  links = new Map<LINK, boolean>()
    .set(LINK.HOME, true)
    .set(LINK.ABOUT, false)
    .set(LINK.PROJECTS, false)
    .set(LINK.CONTACT, false);

  altLinks = ['home', 'about', 'projects', 'contact'];

  constructor(public nav: NavigationService) {
    super();
    // this.setActive(this.prevLink);
    this.nav.navEvent.subscribe((link) => {
      this.setActive(link);
      // console.log('event');
    });
  }

  setActive(link: LINK) {
    // if (this.prevLink == link) return;

    this.links.set(this.prevLink, false);
    this.Id(`${this.prevLink}-link`).classList.remove('link-active');

    this.links.set((this.prevLink = link), true);
    this.Id(`${this.prevLink}-link`).classList.add('link-active');
  }
}
