import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  viewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { Id, constrain } from 'src/app/shared/models/Utils';
import { MediaQueriesService } from 'src/app/shared/services/media-queries.service';
import { ScrollService } from 'src/app/shared/services/scroll.service';
import { LINK } from '../../shared/services/navigation.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnDestroy {
  bg$ = viewChild.required<ElementRef<HTMLDivElement>>('bg');
  LINK = LINK;
  destroy$ = new Subject<void>();
  loaded$ = new Subject<boolean>();

  clipCircle(el: HTMLElement, e: MouseEvent) {
    let box = el.getBoundingClientRect();
    let xoffset = e.clientX - box.left;
    let yoffset = e.clientY - box.top;
    let xperc = (100 * xoffset) / box.width;
    let yperc = (100 * yoffset) / box.height;

    el.style.setProperty(
      '--centroid',
      'circle(30% at ' + xperc + '% ' + yperc + '%)'
    );
  }

  resetClip(el: HTMLElement) {
    el.style.setProperty('--centroid', 'circle(0% at 0% 0%)');
  }

  constructor(
    private mediaQ: MediaQueriesService,
    private scrollService: ScrollService
  ) {
    this.loaded$.subscribe(() =>
      this.scrollService.onScroll.subscribe(() => this.scrollBG())
    );
  }

  ngOnDestroy() {
    this.loaded$.complete();
  }

  // ngOnInit() {
  // const bg = this.Id('bg');
  // const text = this.Id('text');
  // setTimeout(() => {
  //   this.scrollEvent();
  //   window.addEventListener('scroll', this.scrollEvent.bind(this));
  // }, 10);
  // }

  scrollBG() {
    if (this.mediaQ.isMobile) return;
    const bg = this.bg$().nativeElement;
    const text = Id('text');

    //set filter + img top
    let perc = constrain(1 - window.scrollY / bg.clientHeight, 0, 1);

    // background animation
    bg.style.opacity = `${perc - 0.1}`;
    bg.style.top = Math.floor((perc - 1) * bg.clientHeight * 0.5) + 'px';
    bg.style.transform = `scale(${1 + 0.4 * (1 - perc)})`;

    //text animation
    perc = constrain(window.scrollY / bg.clientHeight, 0, 1);
    text.style.opacity = `${1 - perc * 1.5}`;
    text.style.transform = `scale(${1 + 0.4 * perc}) translateY(${
      perc * -5
    }rem)`;
  }

  // load = (event: Event) => {
  //   // this.loaded = true;
  //   setTimeout(() => {
  //     // this.scrollBG();
  //     // this.scrollService.onScroll.subscribe(() => this.scrollBG());
  //   }, 0);
  // };
}
