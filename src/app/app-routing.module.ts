import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { TechSpecsComponent } from './tech-specs/tech-specs.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ReviewComponent } from './review/review.component';

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
    path: 'review',
    component: ReviewComponent,
    data: { title: 'Review'}
  },
  {
    path: 'education',
    component: EducationComponent,
    data: { title: 'Education'}
  },
  {
    path: '',
    redirectTo: '/about-me',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
