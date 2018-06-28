import { NgModule } from '@angular/core';
import {
    MatCardModule,
    MatGridListModule,
  } from '@angular/material';
@NgModule({
  imports: [
    MatCardModule,
    MatGridListModule,
         ],
  exports: [
    MatCardModule,
    MatGridListModule,
         ],
})
export class Material { }