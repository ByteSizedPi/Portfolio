import { LINK } from '../services/navigation.service';
export class Utils {
  constructor() {}
  LINK = LINK;
  mod = (val: number, base: number) => (base + (val % base)) % base;

  constrain = (num: number, min: number, max: number) =>
    min * +(num < min) + max * +(num > max) + num * +(num <= max && num >= min);

  asTitle = (title: string) => title.replace(/_/g, ' ');

  onLoad = (event: Event) => ((<HTMLElement>event.target).style.opacity = '1');

  getTextColor = (hex: string | undefined) => {
    if (!hex) return '#fff';
    return parseInt(hex.substr(1, 2), 16) * 0.299 +
      parseInt(hex.substr(3, 2), 16) * 0.587 +
      parseInt(hex.substr(5, 2), 16) * 0.114 >
      150
      ? '#000'
      : '#fff';
  };

  darkenColor = (hex: string | undefined, perc: number) => {
    if (!hex) return '#fff';
    let r = parseInt(hex.substr(1, 2), 16) * perc;
    let g = parseInt(hex.substr(3, 2), 16) * perc;
    let b = parseInt(hex.substr(5, 2), 16) * perc;
    return `rgb(${r},${g},${b})`;
  };

  getFontWeight = (hex: string | undefined) =>
    this.getTextColor(hex) === '#fff' ? 500 : 700;

  Id = (s: string) => <HTMLElement>document.getElementById(s);
  query = (s: string) => <HTMLElement>document.querySelector(s);
  queryAll = (s: string) =>
    Array.from(<NodeListOf<HTMLElement>>document.querySelectorAll(s));
  body = () => this.query('body');

  async = (func: any) => setTimeout(func, 0);

  loop = (num: number, func: any) => {
    for (let i = 0; i < num; i++) func(i);
  };
}
