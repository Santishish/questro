import { Component, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateY(0)",
        display: "block"
      })),
      state('hide', style({
        opacity: 0,
        transform: "translateY(-150%)",
        display: "none"
      })),
      transition('show => hide', animate('.4s ease-out')),
      transition('hide => show', animate('.4s ease-in'))
    ])
  ]
})
export class NavbarComponent {

  state = 'show';

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition <= componentPosition) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }
  }

  constructor(public el: ElementRef) { }

}
