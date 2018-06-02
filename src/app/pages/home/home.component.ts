import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgURL = [
    'assets/images/slider/Banner1.jpg',
    'assets/images/slider/Banner2.jpg',
    'assets/images/slider/Banner3.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }

}
