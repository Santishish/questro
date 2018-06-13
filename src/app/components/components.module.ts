import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatToolbarModule,
  MatSelectModule,
  MatNativeDateModule,
  MatInputModule,
  MatSnackBarModule, MatProgressBarModule
} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {LayoutModule} from '@angular/cdk/layout';
import {MatSidenavModule, MatListModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

import {FooterComponent} from './layout/footer/footer.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {CarouselComponent} from './carousel/carousel.component';
import {BookingFormComponent} from './booking-form/booking-form.component';
import {AwardsComponent} from './awards/awards.component';
import {HotelCardComponent} from './hotel-card/hotel-card.component';
import {AppLayoutComponent} from './layout/app-layout/app-layout.component';
import {AdmLayoutComponent} from './layout/adm-layout/adm-layout.component';
import {SlideComponent} from './carousel/slide.component';
import {CarouselConfig} from './carousel/carousel.config';
import {NewsletterFormComponent} from './newsletter-form/newsletter-form.component';
import {SpaCardComponent} from './spa-card/spa-card.component';
import {WeddingCardsComponent} from './wedding-cards/wedding-cards.component';
import {PromotionCardComponent} from './promotion-card/promotion-card.component';
import {SideMenuComponent} from './layout/navbar/side-menu/side-menu.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {SubscriberService} from '../services/subscriber.service';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AdmNavbarComponent } from './layout/adm-layout/adm-navbar/adm-navbar.component';
import { AdmSidebarComponent } from './layout/adm-layout/adm-sidebar/adm-sidebar.component';
import { PromotionFormComponent } from './admin/promotion-form/promotion-form.component';
import { PromotionListComponent } from './admin/promotion-list/promotion-list.component';
import { FileUploadComponent } from './admin/file-upload/file-upload.component';
import {PromotionService} from '../services/promotion.service';
import {FileSizePipe} from '../pipes/file-size.pipe';
import {DropZoneDirective} from '../directives/drop-zone.directive';
import { UserFormComponent } from './admin/user-form/user-form.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { MessagesComponent } from './admin/messages/messages.component';
import {MessageService} from '../services/message.service';
import { SubscriberListComponent } from './admin/subscriber-list/subscriber-list.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatNativeDateModule,
    MatInputModule,
    MatSnackBarModule,
    MatDatepickerModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AngularFireDatabaseModule,
    MatProgressBarModule,
    MatMenuModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SideMenuComponent,
    CarouselComponent,
    SlideComponent,
    BookingFormComponent,
    AwardsComponent,
    HotelCardComponent,
    AppLayoutComponent,
    AdmLayoutComponent,
    NewsletterFormComponent,
    SpaCardComponent,
    WeddingCardsComponent,
    PromotionCardComponent,
    ContactFormComponent,
    AdmNavbarComponent,
    AdmSidebarComponent,
    PromotionFormComponent,
    PromotionListComponent,
    FileUploadComponent,
    DropZoneDirective,
    FileSizePipe,
    UserFormComponent,
    UserListComponent,
    MessagesComponent,
    SubscriberListComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SideMenuComponent,
    CarouselComponent,
    SlideComponent,
    BookingFormComponent,
    NewsletterFormComponent,
    AwardsComponent,
    ContactFormComponent,
    HotelCardComponent,
    SpaCardComponent,
    PromotionCardComponent,
    WeddingCardsComponent,
    AppLayoutComponent,
    AdmLayoutComponent,
    SubscriberListComponent,
    PromotionFormComponent,
    PromotionListComponent,
    UserFormComponent,
    UserListComponent,
    MessagesComponent
  ],
  providers: [
    CarouselConfig,
    SubscriberService,
    PromotionService,
    MessageService
  ]
})
export class ComponentsModule {
}
