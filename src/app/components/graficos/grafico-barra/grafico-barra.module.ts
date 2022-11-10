import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { GraficoBarraComponent } from './grafico-barra.component';



@NgModule({
  declarations: [
    GraficoBarraComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    GraficoBarraComponent
  ]
})
export class GraficoBarraModule { }
