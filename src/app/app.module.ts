import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { GraficoBarraModule } from './components/graficos/grafico-barra/grafico-barra.module';
import { GraficoPolarModule } from './components/graficos/grafico-polar/grafico-polar.module';
import { GraficoRoscaModule } from './components/graficos/grafico-rosca/grafico-rosca.module';
import { GraficoTortaModule } from './components/graficos/grafico-torta/grafico-torta.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraficoRoscaModule,
    GraficoBarraModule,
    ChartsModule,
    GraficoPolarModule,
    GraficoTortaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
