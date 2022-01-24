import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Helpers } from '../services/Helpers';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent extends Helpers implements OnInit {
  public projects: {
    name: string;
    description: string;
    link: string;
    imgLink: string;
  }[] = [
    {
      name: 'Movie Streaming Site',
      description: `MongoDB backend and Nodejs API with Angular frontend that allows a user to stream and download movies using The Movie Database API and the YTS API. For displaying understanding of APIs and how to retrieve, combine and deal with asyncronous and missing data. using the Youtube api to display in-frame trailers. Together with a modern and easy to use interface.`,
      link: 'https://github.com/ByteSizedPi/Movie-App',
      imgLink: 'movieapp.webp',
    },
    {
      name: 'Employee Appraisals',
      description: `Angular Web app using SQL Server backend and ASP .NET API to allow the performance of employees of a company to be evaluated`,
      link: 'https://github.com/ByteSizedPi/IMDB-clone',
      imgLink: 'appraisals.webp',
    },
    {
      name: 'Bulk Buy',
      description: `Express web app concept using MongoDb that allows users to place grocery/food orders for other users to collect and deliver for them and in this way save money by buying in bulk and helping those that don't have transport or live far away.`,
      link: 'https://github.com/ByteSizedPi/bulk-buy',
      imgLink: 'bulkbuy.webp',
    },
    {
      name: 'basic 3D rendering library',
      description: `Basic 3d cube rendering library using Processing, a java library, that can compute rotations and perspective for cubes`,
      link: 'https://github.com/ByteSizedPi/processing.java-projects',
      imgLink: 'matrices.webp',
    },
    {
      name: 'p5 projects',
      description: `Some of my p5.js projects: 1. minesweeper, 2. ripple effects, 3. Ptolemy curves, 4. fractal tree, 5. Sierpinski triangle, 6. Sodoku, 7. Vector field simulation, 8. image morphing.`,
      link: 'https://github.com/ByteSizedPi/p5.js-project-links',
      imgLink: 'p5.webp',
    },
    {
      name: 'MetaBalls',
      description: `Processing (Java) project that creates colour coded balls`,
      link: 'https://github.com/ByteSizedPi/processing.java-projects',
      imgLink: 'metaballs.webp',
    },
    {
      name: 'Hilbert Curve',
      description: `Processing (Java) project that creates hilbert curves`,
      link: 'https://github.com/ByteSizedPi/processing.java-projects',
      imgLink: 'hilbert.webp',
    },
  ];
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
