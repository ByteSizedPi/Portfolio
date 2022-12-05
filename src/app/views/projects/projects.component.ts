import { Component } from '@angular/core';
import { Utils } from '../../shared/models/Utils';
import projects from './projects.json';

export type Project = {
  name: string;
  description: string;
  github: string;
  imgLink: string;
  languages: string[];
  live?: string;
};
@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent extends Utils {
  public projects: Project[] = projects;
  constructor() {
    super();
  }
}
