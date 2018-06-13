import { Component } from '@angular/core';
import {SubscriberService} from '../../../services/subscriber.service';
import {Subscriber} from '../../../models/subscriber';
import {MatSnackBar} from '@angular/material';

declare const swal: any;

@Component({
  selector: 'app-subscriber-list',
  templateUrl: './subscriber-list.component.html',
  styleUrls: ['./subscriber-list.component.css']
})
export class SubscriberListComponent  {
  subscriber$;

  constructor(private subscriberService: SubscriberService, private snackBar: MatSnackBar) {
    this.subscriber$ = this.subscriberService.getSubscribers();
  }

  deleteSubscriber(subscriber) {
    swal({
      title: '¿Está seguro?',
      text: `¿Desea eliminar al suscriptor ${subscriber.name}?`,
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        this.subscriberService.deleteSubscriber(subscriber.$key)
          .then(() => {
            this.snackBar.open("Suscriptor eliminado", "Cerrar", {
              duration: 2000
            });
          });
      } else {
        swal('No se eliminó al suscriptor');
      }
    });
  }

}
