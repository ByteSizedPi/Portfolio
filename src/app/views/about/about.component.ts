import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay, distinctUntilChanged, filter, map, startWith } from 'rxjs';
import { Id } from '../../shared/models/Utils';
import { MediaQueriesService } from '../../shared/services/media-queries.service';
import {
  LINK,
  NavigationService,
} from '../../shared/services/navigation.service';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  LINK = LINK;
  initialized = false;
  showButton$ = this.scroll.onScroll.pipe(
    startWith(true),
    map(() => this.media.isMobile),
    distinctUntilChanged()
  );
  constructor(
    private navService: NavigationService,
    public media: MediaQueriesService,
    private scroll: ScrollService
  ) {
    this.navService.navEvent
      .pipe(filter((link) => link === 'about'))
      .subscribe(() => {
        ['computer-animation', 'about-content'].map(Id).forEach((el) => {
          el.style.opacity = '1';
        });
      });

    this.showButton$
      .pipe(
        filter((s) => !s),
        delay(200)
      )
      .subscribe(() => {
        if (!this.initialized) {
          console.log('init');
          // liquidButton();
          this.initialized = true;
        }
      });
  }

  contact() {
    Id('contact-link').click();
  }
}
