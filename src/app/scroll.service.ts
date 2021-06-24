import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private element: HTMLElement;
  private inView: EventEmitter<any> = new EventEmitter();

  constructor() { }

  init(element: HTMLElement) {
    this.element = element;
    document.addEventListener("scroll", () => {
      const margin = 150;
      if (Math.abs(this.getTop()) <= margin) this.inView.emit();
    });

    return this;
  }

  getTop = () => this.element.getBoundingClientRect().top;
  isInView = () => this.inView;
}
