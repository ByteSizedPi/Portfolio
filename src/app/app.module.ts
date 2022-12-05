import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './shared/components/top-nav/top-nav.component';
import { ScrollListenerDirective } from './shared/directives/scroll-listener.directive';
import { HomeComponent } from './views/home/home.component';
import { ImgLoadDirective } from './shared/directives/img-load.directive';
import { MediaLinksComponent } from './views/home/media-links/media-links.component';
import { AboutComponent } from './views/about/about.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ProjectMediaComponent } from './views/projects/project-media/project-media.component';
import { InfoComponent } from './views/projects/info/info.component';

@NgModule({
  declarations: [AppComponent, TopNavComponent, ScrollListenerDirective, HomeComponent, ImgLoadDirective, MediaLinksComponent, AboutComponent, ProjectsComponent, ProjectMediaComponent, InfoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
