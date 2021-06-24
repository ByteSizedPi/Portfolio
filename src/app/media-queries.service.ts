import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaQueriesService {
  private mobile: boolean;
  private queries: string[] = [
    "(min-width: 0px) and (max-width: 480px)",
    "(min-width: 481px) and (max-width: 768px)",
    "(min-width: 769px) and (max-width: 1024px)",
    "(min-width: 1025px) and (max-width: 1200px)",
    "(min-width: 1201px)",
  ];
  constructor() { }

  init() {
    var mobileSize = window.matchMedia(this.queries[0]);
    this.mobile = mobileSize.matches;
    mobileSize.addListener(x => this.mobile = x.matches);
  }

  isMobile = () => this.mobile;
}
