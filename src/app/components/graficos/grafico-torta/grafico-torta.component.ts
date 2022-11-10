import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Legenda } from '../interface/legenda';

@Component({
  selector: 'app-grafico-torta',
  templateUrl: './grafico-torta.component.html',
  styleUrls: ['./grafico-torta.component.scss']
})
export class GraficoTortaComponent implements OnInit {
  options = {
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
          label: function(tooltipItem: any, data: any) {
            const index = tooltipItem.index
            let value: number = data.datasets[0].data[index]
            const label = data.labels[index] + ':' + value.toFixed(2);
            return label
          }
        }
    }
  }

  dataset: ChartDataSets[] = []
  @ViewChild(BaseChartDirective) chart: any

  checks: Legenda[] = [];

  labels = ['Account A', 'Account B', 'Account C', 'Account D', 'Account  E', 'Account F', 'Account G', 'Account H', 'Account I', 'Account J']

  constructor() { }

  ngOnInit(): void {
    this.inicializarGraficoELegenda()
  }

  toggleData(check: any) {
    check.checkValue = !check.checkValue
    this.chart.chart.getDatasetMeta(0).data[check.id].hidden = !check.checkValue
    this.chart.update()
  }

  inicializarGraficoELegenda() {
    this.dataset = [{
      backgroundColor: ['rgba(226,0,122, 1)', 'rgba(203,211,0,1)', 'rgba(98,33,129,1)', 'rgba(0,148,196,1)', 'rgba(104,200,222,1)','rgba(165,175,35,1)','rgba(235,94,129,1)','rgba(188,9,0,1)','rgba(137,116,114,1)','rgba(55,242,183,1)'],
      data: [152,124,145,754,1434,148,4161,416,632, 1854]
    }]

    if(this.labels && this.labels.length > 0) {
      this.labels.forEach((label, index) => {
        this.checks = [
          ...this.checks,
          {
            id: index,
            name: label,
            checkValue: true
          }
        ]
      })
    }

  }
}
