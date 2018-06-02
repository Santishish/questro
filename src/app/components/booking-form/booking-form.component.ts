import { Component } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  hotel: string;
  adults = 2;
  children = 0;
  dateIn: any;
  dateOut: any;

  baseURL = "https://reservations.travelclick.com";

  hotels = [
    {value: '14946', viewValue: 'Casa Dorada'},
    {value: '15273', viewValue: 'Casa del Mar'}
  ];

  adultDropdown = [1, 2, 3, 4, 5, 6];
  childDropdown = [0, 1, 2];

  changeCheck(type: string, event: MatDatepickerInputEvent<Date>) {
    if (type === 'in') {
      this.dateIn = new Date(event.target.value).toLocaleDateString('en-US'); // 12/25/2018
      return;
    } else if (type === 'out') {
      this.dateOut = new Date(event.target.value).toLocaleDateString('en-US');
    }
  }

  book() {
    if (!this.hotel || !this.dateIn || !this.dateOut) return;
    const url = `${this.baseURL}/${this.hotel}?children=${this.children}&dateout=${this.dateOut}&hotelid=${this.hotel}&adults=${this.adults}&datein=${this.dateIn}&languageid=1&rooms=1#/accommodation/room`;
    window.location.href = url;
  }

}
