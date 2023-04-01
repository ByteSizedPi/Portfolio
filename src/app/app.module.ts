import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './shared/components/top-nav/top-nav.component';
import { ImgLoadDirective } from './shared/directives/img-load.directive';
import { ScrollListenerDirective } from './shared/directives/scroll-listener.directive';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { ElectricBezierComponent } from './views/contact/electric-bezier/electric-bezier.component';
import { HomeComponent } from './views/home/home.component';
import { MediaLinksComponent } from './views/home/media-links/media-links.component';
import { InfoComponent } from './views/projects/info/info.component';
import { ProjectMediaComponent } from './views/projects/project-media/project-media.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { SkillsComponent } from './views/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ScrollListenerDirective,
    HomeComponent,
    ImgLoadDirective,
    MediaLinksComponent,
    AboutComponent,
    ProjectsComponent,
    ProjectMediaComponent,
    InfoComponent,
    SkillsComponent,
    ElectricBezierComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
