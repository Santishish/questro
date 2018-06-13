import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from '../../../services/message.service';

@Component({
  selector: 'app-adm-message',
  templateUrl: './adm-message.component.html',
  styleUrls: ['./adm-message.component.css']
})
export class AdmMessageComponent {
  message;

  constructor(private route: ActivatedRoute, private messageService: MessageService) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.messageService.get(id).subscribe(p => this.message = p);
      this.messageService.markAsRead(id, this.message);
    }
  }


}
