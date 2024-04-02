import { Component } from '@angular/core';
import { Id, onLoad } from '../../models/Utils';
import { NavigationService } from '../../services/navigation.service';
import { LINK } from '../../services/scroll.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  onLoad = onLoad;
  prevLink: LINK = LINK.HOME;
  navOpen: boolean = false;

  links = new Map<LINK, boolean>()
    .set(LINK.HOME, true)
    .set(LINK.ABOUT, false)
    .set(LINK.SKILLS, false)
    .set(LINK.PROJECTS, false)
    .set(LINK.CONTACT, false);

  // altLinks = ['home', 'about', 'projects', 'contact'];
  altLinks: string[] = Object.values(LINK);

  constructor(public nav: NavigationService) {
    // this.setActive(this.prevLink);
    this.nav.navEvent.subscribe((link) => {
      this.setActive(link);
      // console.log('event');
    });
  }

  setActive(link: LINK) {
    // if (this.prevLink == link) return;

    this.links.set(this.prevLink, false);
    Id(`${this.prevLink}-link`).classList.remove('link-active');

    this.links.set((this.prevLink = link), true);
    Id(`${this.prevLink}-link`).classList.add('link-active');
  }
}
