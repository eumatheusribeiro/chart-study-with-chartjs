import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { GraficoRoscaComponent } from './grafico-rosca.component';



@NgModule({
  declarations: [
    GraficoRoscaComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    GraficoRoscaComponent
  ]
})
export class GraficoRoscaModule { }
