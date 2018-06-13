import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../services/authentication.service';
import {MessageService} from '../../../../services/message.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/admin/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/admin/promotions', title: 'Promociones',  icon: 'attach_money', class: '' },
  { path: '/admin/users', title: 'Usuarios',  icon: 'person', class: '' },
  { path: '/admin/messages', title: 'Mensajes',  icon: 'message', class: '' },
];

@Component({
  selector: 'app-adm-sidebar',
  templateUrl: './adm-sidebar.component.html',
  styleUrls: ['./adm-sidebar.component.css']
})

export class AdmSidebarComponent implements OnInit {

  menuItems: any[];
  unread;

  constructor(private authService: AuthenticationService, private messageService: MessageService) {
    this.messageService.getUnreadMessages().valueChanges().subscribe(data => this.unread = data.length);
  }

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

  signOut() {
    this.authService.signOut();
  }

}
