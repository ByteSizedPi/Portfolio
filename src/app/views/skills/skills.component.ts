import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MediaQueriesService } from 'src/app/shared/services/media-queries.service';
import { ScrollService } from 'src/app/shared/services/scroll.service';
import { Utils } from '../../shared/models/Utils';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent extends Utils implements OnInit, AfterViewInit {
  skills = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    {
      name: 'Angular',
      link: 'angular.svg',
      color: '#e23237',
      items: ['Angular Material', 'RxJS', 'NgRx', 'Ngx-charts'],
      langs: [
        { name: 'Typescript', link: 'typescript.svg', color: '#007acc' },
        { name: 'Javascript', link: 'javascript.svg', color: '#f0dc50' },
        { name: 'HTML', link: 'html5.svg', color: '#f1652a' },
        { name: 'Sass', link: 'sass.svg', color: '#cf649a' },
        { name: 'CSS', link: 'css3.svg', color: '#33a9dc' },
      ],
    },
    {
      name: 'Node',
      link: 'nodejs.svg',
      color: '#5cab46',
      items: ['Express', 'Mongoose', 'Node-cache', 'jsonwebtoken', 'ts-node'],
      langs: [
        { name: 'Typescript', link: 'typescript.svg', color: '#007acc' },
        { name: 'Javascript', link: 'javascript.svg', color: '#f0dc50' },
      ],
    },
    undefined,
    undefined,
    undefined,
    {
      name: 'Database',
      link: 'database.svg',
      color: '#ea1b22',
      items: [
        'SQL',
        'NoSQL',
        'MongoDB',
        'MySQL',
        'PostgreSQL',
        'MS SQL Server',
      ],
      langs: [
        { name: 'SQL', link: 'sql.svg', color: '#ea1b22' },
        { name: 'NoSQL', link: 'mongodb.svg', color: '#599636' },
      ],
    },
    {
      name: 'Python',
      link: 'python.svg',
      color: '#417eaf',
      items: ['numpy', 'scikit-image', 'matplotlib', 'pandas', 'scipy'],
    },
    {
      name: 'Other',
      link: 'code.svg',
      color: '#fAfAfA',
      items: ['Git'],
      langs: [
        { name: 'PHP', link: 'php.svg', color: '#8993be' },
        { name: 'Java', link: 'java.svg', color: '#e76f00' },
      ],
    },

    undefined,
    undefined,
    undefined,
    undefined,
  ];

  boxes = [0, 0, 0, 0, 0, 0];
  rows = [0, 0, 0, 0];
  indices = [8, 9, 13, 14, 15];

  constructor(
    private mediaQueries: MediaQueriesService,
    private scrollService: ScrollService
  ) {
    super();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.scrollEvent();
    let sub = this.scrollService.events['skills'].subscribe(() => {
      this.queryAll('.card').forEach((skill, i: number) => {
        setTimeout(() => {
          skill.style.transform = 'scale(1)';
        }, i * 100);
      });
      sub.unsubscribe();
      setTimeout(() => this.addEventListeners(), 1500);
    });
  }

  addEventListeners() {
    let isHovering = false;
    this.queryAll('.card')
      .filter((el, i: number) => this.indices.includes(i))
      .forEach((element: HTMLElement, i: number) => {
        element.addEventListener('mouseleave', (e: MouseEvent) => {
          setTimeout(() => (isHovering = false), 150);
          if (!this.mediaQueries.isMobile) {
            element.style.transition = '.2s';
            element.style.transform = 'none';
          }
        });
        element.addEventListener('mousemove', (e: MouseEvent) => {
          if (!this.mediaQueries.isMobile) {
            let box = element.getBoundingClientRect();
            let xoffset = e.clientX - box.left - box.width / 2;
            let yoffset = e.clientY - box.top - box.height / 2;
            let xdeg = (360 * xoffset) / (box.width * 10);
            let ydeg = (360 * yoffset) / (box.height * 10);
            const transform = `rotateX(${-ydeg}deg) rotateY(${xdeg}deg)`;
            element.style.transform = transform;
            element.style.transition = isHovering ? 'none' : '.2s';
            setTimeout(() => (isHovering = true), 100);
          }
        });
        element.addEventListener(
          'touchmove',
          () => (element.style.transform = 'none')
        );
      });
  }

  scrollEvent() {
    const skills = this.query('.skills-text');
    const skills2 = this.query('.skills-text-rotated');

    window.addEventListener('scroll', () => {
      let top = skills.getBoundingClientRect().top;
      const offset = 100;
      skills.style.transform = `translateX(${-top / 2 - offset}px)`;
      skills2.style.transform = `translateX(${top / 2 - offset}px)`;
    });
  }
}
