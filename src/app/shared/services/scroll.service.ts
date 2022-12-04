import { EventEmitter, Injectable } from '@angular/core';
import { Utils } from '../models/Utils';

@Injectable({
  providedIn: 'root',
})
export class ScrollService extends Utils {
  private nodes: EventEmitter<any>[] = [];
  public inView: EventEmitter<any> = new EventEmitter();
  private elements = ['home', 'about', 'skills', 'projects', 'contact'];

  constructor() {
    super();
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
  }

  listenOn = (index: number) => this.nodes[index];
}
