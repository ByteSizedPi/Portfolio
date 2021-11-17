import { EventEmitter, Injectable } from '@angular/core';
import { Helpers } from './Helpers';
import { ScrollService } from './scroll.service';

@Injectable({
  providedIn: 'root'
})
export class LoadService extends Helpers {
  private nodes: EventEmitter<any>[] = [];
  private links = [
    "home",
    "about",
    "skills",
    "projects",
    "contact",
  ];

  constructor() {
    super();
    this.links.forEach(link => this.nodes.push(new ScrollService(link).inView));
  }

  listenOn = (index: number) => this.nodes[index];


}
