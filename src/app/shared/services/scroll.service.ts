import { EventEmitter, Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { LINK } from './navigation.service';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  public onScroll: Observable<any> = fromEvent(window, 'scroll');
  public events: { [key in LINK]: EventEmitter<LINK> } = {
    home: new EventEmitter(),
    about: new EventEmitter(),
    skills: new EventEmitter(),
    projects: new EventEmitter(),
    contact: new EventEmitter(),
  };

  // constructor() {
  // fromEvent(window, 'scroll').subscribe(() => {
  //   this.procedures.forEach((procedure) => procedure());
  // });
  // this.views.forEach((view) => this.addView(view));
  // document.addEventListener('scroll', () => {
  //   let top = this.Id(element).getBoundingClientRect().top;
  //   const margin = 200;
  //   if (Math.abs(top) <= margin) this.inView.emit();
  // });
  // this.nodes = this.elements
  //   .map((el) => this.Id(el))
  //   .map((el) => {
  //     const node = new EventEmitter();
  //     el.addEventListener('scroll', () => {
  //       const { top } = el.getBoundingClientRect();
  //       const margin = 200;
  //       if (Math.abs(top) <= margin) node.emit();
  //     });
  //     new EventEmitter();
  //   });
  // this.links.forEach((link) =>
  //   this.nodes.push(new ScrollService(link).inView)
  // );
  // }

  // listenOn = (index: number) => this.nodes[index];
}
