import { ScrollService } from '../services/scroll.service';
import { Component, OnInit } from '@angular/core';
import { LoadService } from '../services/load.service';
import { Helpers } from '../services/Helpers';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent extends Helpers implements OnInit {
  prevLink: number = 0;
  navOpen: boolean = false;

  links = [
    { text: "home", isActive: true },
    { text: "about", isActive: false },
    { text: "skills", isActive: false },
    { text: "projects", isActive: false },
    { text: "contact", isActive: false },
  ];

  constructor(private loadService: LoadService) {
    super();
  }

  ngOnInit(): void {
    let i = 0;
    this.loop(5, i => this.loadService.listenOn(i)
      .subscribe(() => this.setActive(i)));
  }

  setActive(index: number) {
    this.links[this.prevLink].isActive = false;
    this.links[this.prevLink = index].isActive = true;

    setTimeout(() => this.toggleNav(false), 10);
  }

  toggleNav(toggle: boolean = true) {
    this.navOpen = toggle ? !this.navOpen : false;
  }

}
