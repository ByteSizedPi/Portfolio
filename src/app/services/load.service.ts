import { EventEmitter, Injectable } from '@angular/core';
import { ScrollService } from './scroll.service';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  private nodes: EventEmitter<any>[] = [];
  private links = [
    "home",
    "about",
    "skills",
    "projects",
    "contact",
  ];

  constructor() {
    this.links.forEach(link => this.nodes.push(new ScrollService(link).inView));
  }

  listenOn = (index: number) => this.nodes[index];
}
