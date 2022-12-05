import { Component } from '@angular/core';
import { Utils } from '../../shared/models/Utils';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent extends Utils {
  public projects: {
    name: string;
    description: string;
    github: string;
    imgLink: string;
    languages: string[];
  }[] = [
    {
      name: 'Movie Streaming Site',
      description: `MongoDB backend and Nodejs API with Angular frontend that allows a user to stream and download movies using The Movie Database API and the YTS API. For displaying understanding of APIs and how to retrieve, combine and deal with asyncronous and missing data. using the Youtube api to display in-frame trailers. Together with a modern and easy to use interface.`,
      github: 'https://github.com/ByteSizedPi/Movie-App',
      imgLink: 'movieapp.webp',
      languages: [
        'angular.svg',
        'typescript.svg',
        'sass.svg',
        'nodejs.svg',
        'mongodb.svg',
      ],
    },
    {
      name: 'Point of Sale System',
      description: `MySQL backend with php API and Angular frontend Point of Sale System designed for consignment for a shop and is currently hosted live on a secure site. Demonstrates the use of html-to-pdf converter, ngx charts and Angular Material`,
      github: 'https://github.com/ByteSizedPi/Orania_POS',
      imgLink: 'pos.webp',
      languages: ['angular.svg', 'typescript.svg', 'sass.svg', 'php.svg'],
    },
    {
      name: 'Employee Appraisals',
      description: `Angular Web app using SQL Server backend and ASP .NET API to allow the performance of employees of a company to be evaluated`,
      github: 'https://github.com/ByteSizedPi/Employee-Appraisals',
      imgLink: 'appraisals.webp',
      languages: ['angular.svg', 'typescript.svg', 'sass.svg', 'dotnet.svg'],
    },
    {
      name: 'PRA Calculator',
      description: `simple script that demonstrates the page replacement algorithm used in RAM and the TLB showing off: 1. Clock 2. FIFO 3. LRU 4. Optimal 5. Second Chance`,
      github: 'https://github.com/ByteSizedPi/PRA-Calculator',
      imgLink: 'pracalculator.webp',
      languages: ['javascript.svg', 'html5.svg', 'css3.svg'],
    },
    {
      name: 'Bulk Buy',
      description: `Express web app concept using MongoDb that allows users to place grocery/food orders for other users to collect and deliver for them and in this way save money by buying in bulk and helping those that don't have transport or live far away.`,
      github: 'https://github.com/ByteSizedPi/bulk-buy',
      imgLink: 'bulkbuy.webp',
      languages: ['javascript.svg', 'html5.svg', 'css3.svg', 'mongodb.svg'],
    },
    {
      name: 'basic 3D rendering library',
      description: `Basic 3d cube rendering library using Processing, a java library, that can compute rotations and perspective for cubes`,
      github: 'https://github.com/ByteSizedPi/processing.java-projects',
      imgLink: 'matrices.webp',
      languages: ['java.svg'],
    },
    {
      name: 'p5 projects',
      description: `Some of my p5.js projects: 1. minesweeper, 2. ripple effects, 3. Ptolemy curves, 4. fractal tree, 5. Sierpinski triangle, 6. Sodoku, 7. Vector field simulation, 8. image morphing.`,
      github: 'https://github.com/ByteSizedPi/p5.js-project-links',
      imgLink: 'p5.webp',
      languages: ['javascript.svg'],
    },
  ];
  constructor() {
    super();
  }
}
