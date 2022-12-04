import { Directive, ElementRef, Input } from '@angular/core';
import { filter, fromEvent, map } from 'rxjs';
import { LINK, NavigationService } from '../services/navigation.service';

@Directive({
  selector: '[scrollListener]',
})
export class ScrollListenerDirective {
  @Input() scrollListener: LINK;
  constructor(private el: ElementRef, private nav: NavigationService) {
    fromEvent(document, 'scroll')
      .pipe(
        map(() => this.el.nativeElement.getBoundingClientRect()),
        map(({ top }) => Math.abs(top)),
        filter((top) => top <= 100)
      )
      .subscribe(() => {
        this.el.nativeElement.id = this.scrollListener;
        this.nav.navEvent.emit(this.scrollListener);
      });
  }
}
