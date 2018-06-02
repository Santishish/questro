import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmPromotionsComponent } from './adm-promotions/adm-promotions.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, AdmPromotionsComponent]
})
export class AdminModule { }
