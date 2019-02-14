import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { TechSpecsComponent } from './tech-specs/tech-specs.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {
    path: 'about-me',
    component: AboutMeComponent,
    data: { title: 'About Me' }
  },
  {
    path: 'tech-specs',
    component: TechSpecsComponent,
    data: { title: 'Technical Talk'}
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact'}
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
    data: { title: 'Feedback'}
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
