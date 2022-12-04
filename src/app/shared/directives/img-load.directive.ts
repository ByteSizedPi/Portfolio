import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[imgLoad]',
})
export class ImgLoadDirective {
  @Input() imgLoad: string;
  constructor({ nativeElement: img }: ElementRef<HTMLImageElement>) {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s';
    img.loading = 'lazy';
    setTimeout(() => (img.src = this.imgLoad));
    img.onload = () => (img.style.opacity = '1');
  }
}
