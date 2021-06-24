import { ScrollService } from './../scroll.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  prevLink: number = 0;
  navOpen: boolean = false;

  links = [
    { text: "home", isActive: true },
    { text: "about", isActive: false },
    { text: "skills", isActive: false },
    { text: "projects", isActive: false },
    { text: "contact", isActive: false },
  ];

  constructor() { }

  ngOnInit(): void {
    this.links.forEach((link, index: number) =>
      new ScrollService()
        .init(document.getElementById(link.text))
        .isInView().subscribe(() => this.setActive(index))
    );
  }

  setActive(index: number) {
    this.links[this.prevLink].isActive = false;
    this.links[index].isActive = true;
    this.prevLink = index;

    // if (clicked) {
    //   document.getElementById(this.links[index].text)
    //     .scrollIntoView(true);

    //   window.scrollBy(0, -3 * 16);
    // }

    setTimeout(() => this.toggleNav(false), 10);
  }

  toggleNav(toggle: boolean = true) {
    this.navOpen = toggle ? !this.navOpen : false;
  }

}
