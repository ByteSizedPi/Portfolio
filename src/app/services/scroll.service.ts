import { Injectable, EventEmitter } from '@angular/core';
import { Helpers } from './Helpers';

@Injectable({
  providedIn: 'root'
})
export class ScrollService extends Helpers {
  public inView: EventEmitter<any> = new EventEmitter();

  constructor(element: string) {
    super();
    document.addEventListener("scroll", () => {
      let top = this.Id(element).getBoundingClientRect().top;
      const margin = 200;
      if (Math.abs(top) <= margin) this.inView.emit();
    });
  }

  isInView = () => this.inView;
}
