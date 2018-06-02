import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { HomeComponent } from './home/home.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { RelaxingComponent } from './relaxing/relaxing.component';
import { WeddingEventsComponent } from './wedding-events/wedding-events.component';
import { LoginComponent } from './login/login.component';
import {ComponentsModule} from '../components/components.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    AdminModule,
    ComponentsModule
  ],
  declarations: [HomeComponent, PromotionsComponent, ExperiencesComponent, RelaxingComponent, WeddingEventsComponent, LoginComponent, ContactComponent]
})
export class PagesModule { }
