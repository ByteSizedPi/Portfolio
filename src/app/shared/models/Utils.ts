// export class Utils {
//   constructor() {}
export const mod = (val: number, base: number) => (base + (val % base)) % base;

export const constrain = (num: number, min: number, max: number) =>
  min * +(num < min) + max * +(num > max) + num * +(num <= max && num >= min);

export const asTitle = (title: string) => title.replace(/_/g, ' ');

export const onLoad = (event: Event) =>
  ((<HTMLElement>event.target).style.opacity = '1');

export const getTextColor = (hex: string | undefined) => {
  if (!hex) return '#fff';
  return parseInt(hex.substr(1, 2), 16) * 0.299 +
    parseInt(hex.substr(3, 2), 16) * 0.587 +
    parseInt(hex.substr(5, 2), 16) * 0.114 >
    150
    ? '#000'
    : '#fff';
};

export const darkenColor = (hex: string | undefined, perc: number) => {
  if (!hex) return '#fff';
  let r = parseInt(hex.substr(1, 2), 16) * perc;
  let g = parseInt(hex.substr(3, 2), 16) * perc;
  let b = parseInt(hex.substr(5, 2), 16) * perc;
  return `rgb(${r},${g},${b})`;
};

export const getFontWeight = (hex: string | undefined) =>
  getTextColor(hex) === '#fff' ? 500 : 700;

export const Id = (s: string) => <HTMLElement>document.getElementById(s);
export const query = (s: string) => <HTMLElement>document.querySelector(s);
export const queryAll = (s: string) =>
  Array.from(<NodeListOf<HTMLElement>>document.querySelectorAll(s));
export const body = () => query('body');

export const async = (func: any) => setTimeout(func, 0);

export const loop = (num: number, func: any) => {
  for (let i = 0; i < num; i++) func(i);
};
// }
