import { Injectable } from '@angular/core';
import { Utils } from '../models/Utils';

@Injectable({
  providedIn: 'root',
})
export class LoadService extends Utils {
  private procedures: (() => void)[] = [];
  // private nodes: EventEmitter<any>[] = [];
  // private links = ['home', 'about', 'skills', 'projects', 'contact'];

  constructor() {
    super();
    // this.links.forEach((link) =>
    //   this.nodes.push(new ScrollService(link).inView)
    // );
  }

  // listenOn = (index: number) => this.nodes[index];
}
