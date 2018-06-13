import { Component } from '@angular/core';
import {MessageService} from '../../../services/message.service';
import {MatSnackBar} from '@angular/material';

declare const swal: any;

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  messages$;

  constructor(private messageService: MessageService, private snackBar: MatSnackBar) {
    this.messages$ = this.messageService.getMessages();
  }

  deleteMessage(message) {
    swal({
      title: '¿Está seguro?',
      text: `¿Desea eliminar el mensaje?`,
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        this.messageService.deleteMessage(message.$key)
          .then(() => {
            this.snackBar.open("Mensaje eliminado", "Cerrar", {
              duration: 2000
            });
          });
      } else {
        swal('No se eliminó el mensaje');
      }
    });
  }

}
