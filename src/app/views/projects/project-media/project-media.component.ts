import { Component, Input } from '@angular/core';
import { Utils } from '../../../shared/models/Utils';

@Component({
  selector: 'app-project-media',
  templateUrl: './project-media.component.html',
  styleUrls: ['./project-media.component.scss'],
})
export class ProjectMediaComponent extends Utils {
  @Input() video: string;
  @Input() img: string;
  constructor() {
    super();
  }
}
