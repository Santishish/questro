import { Component } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {PromotionService} from '../../../services/promotion.service';
import {MatSnackBar} from '@angular/material';
import {Promotion} from '../../../models/promotion';

@Component({
  selector: 'app-promotion-form',
  templateUrl: './promotion-form.component.html',
  styleUrls: ['./promotion-form.component.scss']
})
export class PromotionFormComponent {

  promotion: Promotion = { title: '', text: '', startDate: '', endDate: '', imgURL: '', additionalInfo: '' };
  image: FileList;
  startDateToSend;
  endDateToSend;
  progress: { percentage: number } = { percentage: 0 };

  titleVal = new FormControl('', Validators.required);
  textVal = new FormControl('', Validators.required);
  startDateVal = new FormControl('', Validators.required);
  endDateVal = new FormControl('', Validators.required);

  constructor(public promotionService: PromotionService, private snackBar: MatSnackBar) {  }

  submit(form: NgForm) {
    if (!this.image) {
      this.snackBar.open("Debe seleccionar una imagen", "Cerrar", {
        duration: 2000
      });
      return;
    }
    this.startDateToSend = this.promotion.startDate.toLocaleDateString('en-US');
    this.endDateToSend = this.promotion.endDate.toLocaleDateString('en-US');
    this.promotionService.pushPromotionImage(this.image,
      {...this.promotion, startDate: this.startDateToSend, endDate: this.endDateToSend},
      this.progress);
    form.reset();
    form.form.markAsPristine();
    form.form.markAsUntouched();
    form.form.updateValueAndValidity();
  }

  onChangeFile(event: FileList) {
    this.image = event;
  }

}
