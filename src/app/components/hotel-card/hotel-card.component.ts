import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent {

  hotels = [
    {
      hotelName: 'CASA DORADA LOS CABOS, RESORT & SPA',
      cardImgURL: 'assets/images/hotels/QR_CardWeb_CD.jpg',
      overlayLogoURL: 'assets/images/footer/logo_casadorada.png', // assets/images/logos/cd_logocasadorada_blanco.png
      features: [
        { iconURL: 'assets/icons/cards/car-side.svg', text: 'Free Parking' },
        { iconURL: 'assets/icons/cards/valet-parking.svg', text: 'Valet parking' },
        { iconURL: 'assets/icons/cards/weather-night.svg', text: 'Nightly Turn-Down Service' },
        { iconURL: 'assets/icons/cards/alarm-check.svg', text: 'Early Check-In (subject to availability)' },
        { iconURL: 'assets/icons/cards/spa.svg', text: 'Spa with wet areas & Gym' },
        { iconURL: 'assets/icons/cards/concierge.svg', text: 'Concierge service' },
        { iconURL: 'assets/icons/cards/safe.svg', text: 'Security boxes' },
        { iconURL: 'assets/icons/cards/dinner.svg', text: 'One place six dinning' },
        { iconURL: 'assets/icons/cards/culinary.svg', text: 'Culinary events (subject to availability)' },
        { iconURL: 'assets/icons/cards/swimmer.svg', text: 'Swimmable beach' }
      ],
      websiteURL: 'http://www.casadorada.com/default-en.html'
    },
    {
      hotelName: 'CASA DEL MAR, GOLF RESORT & SPA',
      cardImgURL: 'assets/images/hotels/QR_CardWeb_CDM.jpg',
      overlayLogoURL: 'assets/images/logos/CDM_logocasadelmar_blanco.png',
      features: [
        { iconURL: 'assets/icons/cards/car-side.svg', text: 'Free Parking' },
        { iconURL: 'assets/icons/cards/valet-parking.svg', text: 'Valet parking' },
        { iconURL: 'assets/icons/cards/weather-night.svg', text: 'Nightly Turn-Down Service' },
        { iconURL: 'assets/icons/cards/alarm-check.svg', text: 'Early Check-In (subject to availability)' },
        { iconURL: 'assets/icons/cards/spa.svg', text: 'Spa with wet areas & Gym' },
        { iconURL: 'assets/icons/cards/concierge.svg', text: 'Concierge service' },
        { iconURL: 'assets/icons/cards/safe.svg', text: 'Security boxes' },
        { iconURL: 'assets/icons/cards/tennis-court.svg', text: 'Tennis court' },
        { iconURL: 'assets/icons/cards/golf.svg', text: 'Golf court' },
        { iconURL: 'assets/icons/cards/pbeach.svg', text: 'Privacy beach' }
      ],
      websiteURL: 'https://www.casadelmar.com.mx/'
    },
    {
      hotelName: 'CASA DEL MAR, GOLF RESORT & SPA',
      cardImgURL: 'assets/images/hotels/QR_CardWeb_CDM.jpg',
      overlayLogoURL: 'assets/images/logos/CDM_logocasadelmar_blanco.png',
      features: [
        { iconURL: 'assets/icons/cards/car-side.svg', text: 'Free Parking' },
        { iconURL: 'assets/icons/cards/valet-parking.svg', text: 'Valet parking' },
        { iconURL: 'assets/icons/cards/weather-night.svg', text: 'Nightly Turn-Down Service' },
        { iconURL: 'assets/icons/cards/alarm-check.svg', text: 'Early Check-In (subject to availability)' },
        { iconURL: 'assets/icons/cards/spa.svg', text: 'Spa with wet areas & Gym' },
        { iconURL: 'assets/icons/cards/concierge.svg', text: 'Concierge service' },
        { iconURL: 'assets/icons/cards/safe.svg', text: 'Security boxes' },
        { iconURL: 'assets/icons/cards/tennis-court.svg', text: 'Tennis court' },
        { iconURL: 'assets/icons/cards/golf.svg', text: 'Golf court' },
        { iconURL: 'assets/icons/cards/pbeach.svg', text: 'Privacy beach' }
      ],
      websiteURL: 'http://www.casadorada.com/default-en.html'
    }
  ];

  constructor() {  }


}
