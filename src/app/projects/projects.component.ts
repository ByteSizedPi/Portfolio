import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects: { name: string, description: string, link: string, imgLink: string }[] = [
    {
      name: "IMDB Clone",
      description: `Angular Web App that allows a user to explore movie information using "The Movie Database API".  Main Intent is to show project using APIs. Further development could include using app as social media platform for users to share and discover movies.`,
      link: "https://github.com/ByteSizedPi/IMDB-clone",
      imgLink: "movies.jpg"
    },
    {
      name: "Bulk Buy",
      description: `Express web app concept using MongoDb that allows users to place grocery/food orders for other users to collect and deliver for them and in this way save money by buying in bulk and helping those that don't have transport or live far away.`,
      link: "https://github.com/ByteSizedPi/bulk-buy",
      imgLink: "bulkbuy.jpg"
    },
    {
      name: "basic 3D rendering library",
      description: `Basic 3d cube rendering library using Processing, a java library, that can compute rotations and perspective for cubes`,
      link: "https://github.com/ByteSizedPi/processing.java-projects",
      imgLink: "matrices.jpg"
    },
    {
      name: "p5 projects",
      description: `Some of my p5.js projects: 1. minesweeper, 2. ripple effects, 3. Ptolemy curves, 4. fractal tree, 5. Sierpinski triangle, 6. Sodoku, 7. Vector field simulation, 8. image morphing.`,
      link: "https://github.com/ByteSizedPi/p5.js-project-links",
      imgLink: "p5.jpg"
    },
    {
      name: "MetaBalls",
      description: `Processing (Java) project that creates colour coded balls`,
      link: "https://github.com/ByteSizedPi/processing.java-projects",
      imgLink: "metaballs.jpg"
    },
    {
      name: "Hilbert Curve",
      description: `Processing (Java) project that creates hilbert curves`,
      link: "https://github.com/ByteSizedPi/processing.java-projects",
      imgLink: "hilbert.jpg"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }


}
