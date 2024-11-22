import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiviewPageRoutingModule } from './apiview-routing.module';

import { BookListComponent } from './apiview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiviewPageRoutingModule
  ],
  declarations: [BookListComponent]
})
export class ApiviewPageModule {}
