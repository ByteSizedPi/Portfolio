import { Component, Input } from '@angular/core';
import { onLoad } from '../../../shared/models/Utils';
import { Project } from '../projects.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  @Input() project: Project;
  onLoad = onLoad;
}
