import { Directive, ElementRef, Input } from '@angular/core';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { LINK, NavigationService } from '../services/navigation.service';
import { ScrollService } from '../services/scroll.service';

@Directive({
  selector: '[scrollListener]',
})
export class ScrollListenerDirective {
  @Input() scrollListener: LINK;
  constructor(
    private el: ElementRef,
    private nav: NavigationService,
    private scrollService: ScrollService
  ) {
    const MARGIN = 200;
    this.scrollService.onScroll
      .pipe(
        map(() => this.el.nativeElement.getBoundingClientRect()),
        map(({ top }) => Math.abs(top)),
        distinctUntilChanged((p, c) => c <= MARGIN === p <= MARGIN),
        filter((top) => top <= MARGIN)
      )
      .subscribe(() => {
        this.nav.navEvent.emit(this.scrollListener);
        this.scrollService.events[this.scrollListener].emit(
          this.scrollListener
        );
        console.log(this.scrollListener);
      });

    // fromEvent(document, 'scroll')
    //   .pipe(
    //     map(() => this.el.nativeElement.getBoundingClientRect()),
    //     map(({ top }) => Math.abs(top)),
    //     distinctUntilChanged((p, c) => c <= 100 === p <= 100),
    //     filter((top) => top <= 100)
    //   )
    //   .subscribe(() => {
    //     // this.el.nativeElement.id = this.scrollListener;
    //     this.nav.navEvent.emit(this.scrollListener);
    //     console.log(this.scrollListener);
    //   });
  }
}
