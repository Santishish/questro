import { Component } from '@angular/core';
import {Message} from '../../models/message';
import {FormControl, Validators} from '@angular/forms';
import {MessageService} from '../../services/message.service';
import * as moment from 'moment';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  message: Message = { name: '', email: '', subject: '', text: '' };

  nameVal = new FormControl('', Validators.required);
  emailVal = new FormControl('', [Validators.required, Validators.email]);
  subjectVal = new FormControl('', Validators.required);
  textVal = new FormControl('', Validators.required);

  constructor(private messageService: MessageService, private snackBar: MatSnackBar) {
    moment.locale('es');
  }

  send() {
    const date = moment().format('LLLL');
    const read = false;

    this.messageService.createMessage({...this.message, date, read})
      .then(() => {
        this.snackBar.open("Message sent!", "Close", {
          duration: 2000
        });
      });
  }

}
