import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { GraficoPolarComponent } from './grafico-polar.component';



@NgModule({
  declarations: [
    GraficoPolarComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    GraficoPolarComponent
  ]
})
export class GraficoPolarModule { }
