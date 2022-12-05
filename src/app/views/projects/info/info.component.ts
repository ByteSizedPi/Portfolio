import { Component, Input } from '@angular/core';
import { Project } from '../projects.component';
import { Utils } from '../../../shared/models/Utils';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent extends Utils {
  @Input() project: Project;
}
