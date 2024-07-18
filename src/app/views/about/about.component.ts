import { ChangeDetectionStrategy, Component } from '@angular/core';
import { take } from 'rxjs';
import { Id } from '../../shared/models/Utils';
import { MediaQueriesService } from '../../shared/services/media-queries.service';
import { NavigationService } from '../../shared/services/navigation.service';
import liquidButton from './liquidButton';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  constructor(
    private navService: NavigationService,
    public media: MediaQueriesService
  ) {
    liquidButton();

    this.navService
      .ifNav('about')
      .pipe(take(1))
      .subscribe(() => {
        ['computer-animation', 'about-content'].map(Id).forEach((el) => {
          el.style.opacity = '1';
        });
      });
  }

  contact() {
    Id('contact-link').click();
  }
}
