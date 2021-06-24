import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MediaQueriesService } from './../media-queries.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  skills = [
    { name: "Javascript", link: "javascript.svg" },
    { name: "Typescript", link: "typescript.svg" },
    { name: "Java", link: "java.svg" },
    { name: "Angular", link: "angular.svg" },
    { name: "HTML5", link: "html5.svg" },
    { name: "CSS3", link: "css3.svg" },
    { name: "Sass", link: "sass.svg" },
  ]

  constructor(private mediaQueries: MediaQueriesService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.addEventListeners();
    this.scrollEvent();

  }

  constrain(num: number, min: number, max: number) {
    if (num < min) return 0;
    if (num > max) return max;
    return num;
  }

  addEventListeners() {
    document.querySelectorAll(".skill-container")
      .forEach((element: HTMLElement) => {
        element.addEventListener("mouseleave", (e: MouseEvent) => {
          if (!this.mediaQueries.isMobile()) {
            element.querySelector<HTMLElement>(".skill").style.transition = ".2s";
            element.querySelector<HTMLElement>(".skill").style.transform = "none";
            element.querySelector<HTMLElement>(".clip-img").style.clipPath = "circle(0% at 50% 50%)";
          }
        });

        element.addEventListener("mousemove", (e: MouseEvent) => {
          if (!this.mediaQueries.isMobile()) {
            let box = element.getBoundingClientRect();
            let xoffset = e.clientX - box.left - box.width / 2;
            let yoffset = e.clientY - box.top - box.height / 2;
            let xdeg = 360 * xoffset / (box.width * 5);
            let ydeg = 360 * yoffset / (box.height * 5);
            element.querySelector<HTMLElement>(".skill").style.transform = `rotateX(${-ydeg}deg) rotateY(${xdeg}deg)`;
            element.querySelector<HTMLElement>(".skill").style.transition = "none";
            element.querySelector<HTMLElement>(".clip-img").style.clipPath = "circle(100% at 50% 50%)";
          }
        });
        element.addEventListener("touchmove", () => element.querySelector<HTMLElement>(".skill").style.transform = "none");
      });
  }

  scrollEvent() {
    const skills = document.querySelector<HTMLElement>(".skills-text");
    const skills2 = document.querySelector<HTMLElement>(".skills-text-rotated");

    window.addEventListener("scroll", () => {
      let top = skills.getBoundingClientRect().top;
      const offset = 100;
      skills.style.transform = `translateX(${-top / 2 - offset}px)`;
      skills2.style.transform = `translateX(${top / 2 - offset}px)`;
    });
  };

}
