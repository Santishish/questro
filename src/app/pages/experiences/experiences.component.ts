import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {

  imgURL = [
    'assets/images/experiences/Banner1_experiences.jpg',
    'assets/images/experiences/Banner2_experiences.jpg',
    'assets/images/experiences/Banner3_experiences.jpg',
    'assets/images/experiences/Banner4_experiences.jpg'
  ];

  constructor() { }

}
