import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BetsPage } from './bets.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [BetsPage],
  exports: [BetsPage] // Make sure to export BetsPage
})


export class BetsPageModule { }
