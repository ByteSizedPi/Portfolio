import { Component } from '@angular/core';
import { onLoad } from '../../shared/models/Utils';
import { LINK } from '../../shared/services/navigation.service';
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
export class ProjectsComponent {
  public projects: Project[] = projects;
  onLoad = onLoad;
  LINK = LINK;
}
