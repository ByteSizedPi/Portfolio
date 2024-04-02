import { Component } from '@angular/core';
import { onLoad } from '../../shared/models/Utils';
import { LINK } from '../../shared/services/navigation.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  show = false;
  email = 'johann12venter@gmail.com';
  number = '+27 64 905 6201';
  github = 'https://github.com/ByteSizedPi';
  linkedin = 'https://www.linkedin.com/in/johanventer0/';
  instagram = 'https://www.instagram.com/johanventer1/';

  onLoad = onLoad;
  LINK = LINK;
  copy = (text: string) => {
    navigator.clipboard.writeText(text);
    this.show = true;
    setTimeout(() => (this.show = false), 1000);
  };
}
