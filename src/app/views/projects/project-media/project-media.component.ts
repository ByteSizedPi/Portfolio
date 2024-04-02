import { Component, Input } from '@angular/core';
import { onLoad } from '../../../shared/models/Utils';

@Component({
  selector: 'app-project-media',
  templateUrl: './project-media.component.html',
  styleUrls: ['./project-media.component.scss'],
})
export class ProjectMediaComponent {
  @Input() video: string;
  @Input() img: string;

  onLoad = onLoad;
}
