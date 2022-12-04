import { Component } from '@angular/core';
import { Utils } from '../../shared/models/Utils';
import {
  NavigationService,
  LINK,
} from '../../shared/services/navigation.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends Utils {
  public loaded = false;

  constructor(public nav: NavigationService) {
    super();
  }
  circleClip() {
    let dev = this.Id('developer');
    let root = document.documentElement;
    dev.addEventListener('mousemove', (e: MouseEvent) => {
      let box = dev.getBoundingClientRect();
      let xoffset = e.clientX - box.left;
      let yoffset = e.clientY - box.top;
      let xperc = (100 * xoffset) / box.width;
      let yperc = (100 * yoffset) / box.height;
      // if (!this.mediaQueries.isMobile()) {
      root.style.setProperty(
        '--centroid',
        'circle(30% at ' + xperc + '% ' + yperc + '%)'
      );
      // }
    });
    dev.addEventListener('mouseleave', (e) => {
      root.style.setProperty('--centroid', 'circle(0% at 0% 0%)');
    });
  }

  scrollEvent() {
    const bg = this.Id('bg');
    const text = this.Id('text');

    window.addEventListener('scroll', () => {
      //set filter + img top
      let perc = this.constrain(1 - window.scrollY / bg.clientHeight, 0, 1);

      bg.style.opacity = `${perc - 0.1}`;
      // if (!this.mediaQueries.isMobile()) {
      bg.style.top = Math.floor((perc - 1) * bg.clientHeight * 0.5) + 'px';
      bg.style.animation = 'none';
      bg.style.transform = `scale(${1 + 0.4 * (1 - perc)})`;

      //text animation
      perc = this.constrain(window.scrollY / bg.clientHeight, 0, 1);
      text.style.opacity = `${1 - perc * 1.5}`;
      text.style.transform = `scale(${1 + 0.4 * perc}) translateY(${
        perc * -5
      }rem)`;
      // }
    });
  }

  load = (event: Event) => {
    this.loaded = true;
    // this.onLoad(event);
    // this.mediaQueries.init();
    setTimeout(() => {
      this.scrollEvent();
      this.circleClip();
    }, 0);
  };
}
