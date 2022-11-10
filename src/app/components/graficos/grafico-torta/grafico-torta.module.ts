import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { GraficoTortaComponent } from './grafico-torta.component';



@NgModule({
  declarations: [
    GraficoTortaComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    GraficoTortaComponent
  ]
})
export class GraficoTortaModule { }
