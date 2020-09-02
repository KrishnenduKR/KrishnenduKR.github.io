import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {ResumeComponent} from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BolgComponent } from './bolg/bolg.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    // {
    //   path : '',
    //   component : AppComponent,
    //   // children: [
    //   //     {
    //   //       path : 'about-me',
    //   //       loadChildren: () => import(`./about/about.module`).then(m => m.AboutModule)
    //   //     },
    //   //     {
    //   //       path : 'home',
    //   //       loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule)
    //   //     }
    //   // ]
    // },
    {
      path: 'about-me',
      component: AboutComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'resume',
      component: ResumeComponent
    },
    {
      path: 'portfolio',
      component: PortfolioComponent
    },
    {
      path: 'blog',
      component: BolgComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
