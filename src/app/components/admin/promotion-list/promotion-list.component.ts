import { Component } from '@angular/core';
import {PromotionService} from '../../../services/promotion.service';
import {MatSnackBar} from '@angular/material';

declare const swal: any;

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.css']
})
export class PromotionListComponent {
  promotions$;

  constructor(private promotionService: PromotionService, private snackBar: MatSnackBar) {
    this.promotions$ = this.promotionService.getPromotions();
  }

  removePromotion(promotion) {
    if(confirm(`¿Desea eliminar la promoción ${promotion.title}?`)) {
      this.promotionService.deletePromotion(promotion.$key)
        .then(() => {
          this.snackBar.open('La promoción se ha eliminado', 'Cerrar', {
            duration: 2000
          });
        });
    }

    /*swal({
      title: '¿Está seguro?',
      text: `¿Desea eliminar la promoción ${promotion.title}?`,
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        this.promotionService.deletePromotion(promotion.$key);
      } else {
        swal('No se eliminó la promoción');
      }
    });*/
  }

}
