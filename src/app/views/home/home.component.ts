import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  signal,
} from '@angular/core';
import { Subject } from 'rxjs';
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
  @ViewChild('bg') bg: ElementRef<HTMLDivElement>;
  LINK = LINK;
  destroy$ = new Subject<void>();
  loaded$ = signal(false);

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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  constructor(
    private mediaQ: MediaQueriesService,
    private scrollService: ScrollService
  ) {}

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
      // this.scrollBG();
      // this.scrollService.onScroll.subscribe(() => this.scrollBG());
    }, 0);
  };
}
