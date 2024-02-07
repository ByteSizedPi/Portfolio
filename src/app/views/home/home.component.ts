import { Component, OnInit } from '@angular/core';
import { MediaQueriesService } from 'src/app/shared/services/media-queries.service';
import { ScrollService } from 'src/app/shared/services/scroll.service';
import { Utils } from '../../shared/models/Utils';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends Utils implements OnInit {
  public loaded = false;

  constructor(
    private mediaQ: MediaQueriesService,
    private scrollService: ScrollService
  ) {
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

      root.style.setProperty(
        '--centroid',
        'circle(30% at ' + xperc + '% ' + yperc + '%)'
      );
    });

    dev.addEventListener('mouseleave', (e) => {
      root.style.setProperty('--centroid', 'circle(0% at 0% 0%)');
    });
  }

  ngOnInit() {
    // const bg = this.Id('bg');
    // const text = this.Id('text');
    // setTimeout(() => {
    //   this.scrollEvent();
    //   window.addEventListener('scroll', this.scrollEvent.bind(this));
    // }, 10);
  }

  scrollBG() {
    if (this.mediaQ.isMobile) return;

    const bg = this.Id('bg');
    const text = this.Id('text');

    //set filter + img top
    let perc = this.constrain(1 - window.scrollY / bg.clientHeight, 0, 1);

    // background animation
    bg.style.opacity = `${perc - 0.1}`;
    if (this.mediaQ.isMobile)
      bg.style.top = Math.floor((perc - 1) * bg.clientHeight * 0.5) + 'px';
    bg.style.transform = `scale(${1 + 0.4 * (1 - perc)})`;

    //text animation
    perc = this.constrain(window.scrollY / bg.clientHeight, 0, 1);
    text.style.opacity = `${1 - perc * 1.5}`;
    text.style.transform = `scale(${1 + 0.4 * perc}) translateY(${
      perc * -5
    }rem)`;
  }

  load = (event: Event) => {
    this.loaded = true;
    setTimeout(() => {
      this.scrollBG();
      this.scrollService.onScroll.subscribe(() => this.scrollBG());
    }, 0);
  };
}
