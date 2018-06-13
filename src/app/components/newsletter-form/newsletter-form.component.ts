import { Component } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {SubscriberService} from '../../services/subscriber.service';
import {Subscriber} from '../../models/subscriber';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-newsletter-form',
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.css']
})
export class NewsletterFormComponent {

  subscriber: Subscriber = {name: '', email: ''};
  name = new FormControl('', Validators.required);
  emailVal = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.name.hasError('required') ? 'Name is required' : '';
  }

  constructor(private snackBar: MatSnackBar, private subscriberService: SubscriberService) { }

  save(f: NgForm) {
    if (!this.subscriber.name || !this.subscriber.email) return;
    this.subscriberService.createSubscriber(this.subscriber)
      .then(() => {
        this.snackBar.open(`Email ${this.subscriber.email} has been registered!`, "Close", {
          duration: 2000
        });
        f.form.reset();
        f.form.markAsUntouched();
        f.form.markAsPristine();
        f.form.updateValueAndValidity();
      });


  }

}
