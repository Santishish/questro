import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatToolbarModule, MatSelectModule, MatNativeDateModule, MatInputModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule, MatListModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

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
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';
import { SpaCardComponent } from './spa-card/spa-card.component';
import { WeddingCardsComponent } from './wedding-cards/wedding-cards.component';
import { PromotionCardComponent } from './promotion-card/promotion-card.component';
import {SideMenuComponent} from './layout/navbar/side-menu/side-menu.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
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
  ],
  providers: [
    CarouselConfig,
  ]
})
export class ComponentsModule {
}
