import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/admin/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/admin/promotions', title: 'Promociones',  icon: 'attach_money', class: '' },
  { path: '/table-list', title: 'Table List',  icon: 'content_paste', class: '' },
  { path: '/typography', title: 'Typography',  icon: 'library_books', class: '' },
  { path: '/icons', title: 'Icons',  icon: 'bubble_chart', class: '' },
  { path: '/notifications', title: 'Notifications',  icon: 'notifications', class: '' },
];

@Component({
  selector: 'app-adm-sidebar',
  templateUrl: './adm-sidebar.component.html',
  styleUrls: ['./adm-sidebar.component.css']
})

export class AdmSidebarComponent implements OnInit {

  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    const width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
    if (width > 991) {
      return false;
    }
    return true;
  }

}
