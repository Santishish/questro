import { Component } from '@angular/core';
import {PromotionService} from '../../services/promotion.service';

@Component({
  selector: 'app-promotion-card',
  templateUrl: './promotion-card.component.html',
  styleUrls: ['./promotion-card.component.css']
})
export class PromotionCardComponent {
  promotions$;

  constructor(private promotionService: PromotionService) {
    this.promotions$ = this.promotionService.getPromotions();
  }

}
