import { Routes, RouterModule } from '@angular/router';

import {AppLayoutComponent} from './components/layout/app-layout/app-layout.component';
import {HomeComponent} from './pages/home/home.component';
import {ExperiencesComponent} from './pages/experiences/experiences.component';
import {RelaxingComponent} from './pages/relaxing/relaxing.component';
import {WeddingEventsComponent} from './pages/wedding-events/wedding-events.component';
import {AdmLayoutComponent} from './components/layout/adm-layout/adm-layout.component';
import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from './pages/admin/dashboard/dashboard.component';
import {PromotionsComponent} from './pages/promotions/promotions.component';
import {ContactComponent} from './pages/contact/contact.component';

const routes: Routes = [
  // Rutas de los sitios públicos
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'promotions', component: PromotionsComponent },
      { path: 'experiences', component: ExperiencesComponent },
      { path: 'relaxing', component: RelaxingComponent },
      { path: 'wedding-events', component: WeddingEventsComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },

  // Rutas de los sitios privados
  {
    path: 'admin',
    component: AdmLayoutComponent,
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      // { path: 'promotions', component: PromotionsComponent },
    ]
  },

  // Rutas sin layout
  { path: 'login', component: LoginComponent },

  // Otras rutas irán a Home
  { path: '**', redirectTo: '' }

];

export const routing = RouterModule.forRoot(routes);
