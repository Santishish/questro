import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { RelaxingComponent } from './relaxing/relaxing.component';
import { WeddingEventsComponent } from './wedding-events/wedding-events.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdmPromotionsComponent } from './admin/adm-promotions/adm-promotions.component';
import {ComponentsModule} from '../components/components.module';
import { ContactComponent } from './contact/contact.component';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {AuthenticationService} from '../services/authentication.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AdmUsersComponent } from './admin/adm-users/adm-users.component';
import { AdmMessagesComponent } from './admin/adm-messages/adm-messages.component';
import { AdmMessageComponent } from './admin/adm-message/adm-message.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
  ],
  declarations: [
    HomeComponent,
    PromotionsComponent,
    ExperiencesComponent,
    RelaxingComponent,
    WeddingEventsComponent,
    LoginComponent,
    ContactComponent,
    DashboardComponent,
    AdmPromotionsComponent,
    AdmUsersComponent,
    AdmMessagesComponent,
    AdmMessageComponent,
  ],
  providers: [
    AuthenticationService,
  ]
})

export class PagesModule { }
