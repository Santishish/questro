import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatToolbarModule, MatSelectModule, MatNativeDateModule, MatInputModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';

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
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    SlideComponent,
    BookingFormComponent,
    AwardsComponent,
    HotelCardComponent,
    AppLayoutComponent,
    AdmLayoutComponent,
    NewsletterFormComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    SlideComponent,
    BookingFormComponent,
    NewsletterFormComponent,
    AwardsComponent,
    HotelCardComponent,
    AppLayoutComponent,
    AdmLayoutComponent,
  ],
  providers: [
    CarouselConfig
  ]
})
export class ComponentsModule {
}
