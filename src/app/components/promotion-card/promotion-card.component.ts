import { Component } from '@angular/core';

@Component({
  selector: 'app-promotion-card',
  templateUrl: './promotion-card.component.html',
  styleUrls: ['./promotion-card.component.css']
})
export class PromotionCardComponent {

  promotions = [
    {
      imgURL: 'assets/images/promotions/QR_CardWeb_weekendsale7.jpg',
      title: 'Weekend Sale',
      text: 'Book your 2018 vacation at any of our resorts\' websites and get a 40% discount on your reservation plus free breakfast and Spa Discount of 20%, every day of your stay!',
      additionalInfo: 'Promotion valid until Sunday night*'
    },
    {
      imgURL: 'assets/images/promotions/QR_CardWeb_happyhour.jpg',
      title: 'Happy Hour',
      text: 'Book your vacations today from 10:00 am to 2:00 pm and save up to 40% on your vacation, with many amenities.',
      additionalInfo: ''
    },
    {
      imgURL: 'assets/images/promotions/QR_CardWeb_ventanocturna2.jpg',
      title: 'Night Sale',
      text: 'Book your holidays this year with us and take advantage of the 45% discount on the stay with breakfast included plus 20% discount on rounds of golf and Spa treatments.',
      additionalInfo: ''
    },
    {
      imgURL: 'assets/images/promotions/QR_CardWeb_BlackFriday.jpg',
      title: 'Black Friday',
      text: 'Book a minimum of 3 nights  from January 2nd to December 20th, 2019* (*Except Spring Break) 45% discount on your reservation and $50 USD credit in SPA*',
      additionalInfo: '*Apply in services of more than 50 min'
    },
    {
      imgURL: 'assets/images/promotions/QR_CardWeb_buenfin.jpg',
      title: 'Buen Fin',
      text: 'Reservando un mínimo de 3 noches del 1 de Enero al 31 de Julio de 2019* (*Excepto Semana Santa) 25% de descuento en su reservación y $50 USD de crédito en SPA* ',
      additionalInfo: '*Aplica en servicios de más de 50 min).'
    }
  ];

  constructor() {  }

}
