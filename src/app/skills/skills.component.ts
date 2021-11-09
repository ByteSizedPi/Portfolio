import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Helpers } from '../services/Helpers';
import { LoadService } from '../services/load.service';
import { MediaQueriesService } from '../services/media-queries.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent extends Helpers implements OnInit, AfterViewInit {
  skills = [
    { name: "Javascript", link: "javascript.svg" },
    { name: "Typescript", link: "typescript.svg" },
    { name: "Java", link: "java.svg" },
    { name: "Angular", link: "angular.svg" },
    { name: "HTML", link: "html5.svg" },
    { name: "CSS", link: "css3.svg" },
    { name: "Sass", link: "sass.svg" },
    { name: "Node", link: "nodejs.svg" },
    { name: "SQL", link: "sql.svg" },
  ]

  constructor(private mediaQueries: MediaQueriesService, private loadService: LoadService) {
    super();
  }

  ngOnInit(): void {
    let sub = this.loadService.listenOn(2).subscribe(() => {
      console.log('hello');
      this.queryAll('.skill').forEach((skill, i: number) => {
        setTimeout(() => skill.style.transform = 'scale(1)', i * 150);
      });
      sub.unsubscribe();
    });
  }

  ngAfterViewInit(): void {
    this.addEventListeners();
    this.scrollEvent();
  }

  addEventListeners() {
    let isHovering = false;
    this.queryAll(".skill-container")
      .forEach((element: HTMLElement) => {
        element.addEventListener("mouseleave", (e: MouseEvent) => {
          setTimeout(() => isHovering = false, 150);
          if (!this.mediaQueries.isMobile()) {
            element.querySelector<HTMLElement>(".skill").style.transition = ".2s";
            element.querySelector<HTMLElement>(".skill").style.transform = "none";
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
            element.querySelector<HTMLElement>(".skill").style.transition = isHovering ? "none" : ".2s";
            setTimeout(() => isHovering = true, 100);
            // element.querySelector<HTMLElement>(".clip-img").style.clipPath = "circle(100% at 50% 50%)";
          }
        });
        element.addEventListener("touchmove", () => element.querySelector<HTMLElement>(".skill").style.transform = "none");
      });
  }

  scrollEvent() {
    const skills = this.query(".skills-text");
    const skills2 = this.query(".skills-text-rotated");

    window.addEventListener("scroll", () => {
      let top = skills.getBoundingClientRect().top;
      const offset = 100;
      skills.style.transform = `translateX(${-top / 2 - offset}px)`;
      skills2.style.transform = `translateX(${top / 2 - offset}px)`;
    });


  };

}
