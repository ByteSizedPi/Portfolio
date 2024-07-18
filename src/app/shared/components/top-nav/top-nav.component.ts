import { Component } from '@angular/core';
import { Id, onLoad } from '../../models/Utils';
import { LINK, NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  onLoad = onLoad;
  prevLink: LINK = 'home';
  navOpen: boolean = false;

  links = new Map<LINK, boolean>()
    .set('home', true)
    .set('about', false)
    .set('skills', false)
    .set('projects', false)
    .set('contact', false);

  altLinks = ['home', 'about', 'skills', 'projects', 'contact'];

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
