import { Component, OnInit } from '@angular/core';
import { Utils } from '../../shared/models/Utils';
import { NavigationService } from '../../shared/services/navigation.service';
// import liquidButton from './liquidButton';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent extends Utils implements OnInit {
  constructor(private navService: NavigationService) {
    super();
  }

  ngOnInit(): void {
    this.navService.navEvent.subscribe((link) => {
      if (link === 'about') this.loadIn();
    });
  }

  loadIn() {
    ['computer-animation', 'about-content'].map(this.Id).forEach((el) => {
      el.style.opacity = '1';
    });
  }

  contact() {
    this.Id('contact-link').click();
  }
}
