import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Legenda } from '../interface/legenda';

@Component({
  selector: 'app-grafico-barra',
  templateUrl: './grafico-barra.component.html',
  styleUrls: ['./grafico-barra.component.scss']
})
export class GraficoBarraComponent implements OnInit {
  options = {
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
          label: (tooltipItem: any, data: any) => {
            const index = tooltipItem.datasetIndex
            let value: number = data.datasets[index].data[0]
            const label = data.datasets[index].label + ':' + value.toFixed(2);
            return label
          },
          title: (tooltipItem: any) => {
            return tooltipItem[0].label = ''
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
    this.dataset[check.id].hidden = !check.checkValue
    this.chart.update()
  }

  inicializarGraficoELegenda() {
    this.dataset = [{
      backgroundColor: ['rgba(226,0,122, 1)'],
      hoverBackgroundColor: ['rgba(226,0,122, 1)'],
      data: [152],
      label: 'Account A'
    },
    {
      backgroundColor: ['rgba(203,211,0,1)'],
      hoverBackgroundColor: ['rgba(203,211,0,1)'],
      data: [124],
      label: 'Account B'
    },
    {
      backgroundColor: ['rgba(98,33,129,1)'],
      hoverBackgroundColor: ['rgba(98,33,129,1)'],
      data: [145],
      label: 'Account C'
    },
    {
      backgroundColor: ['rgba(0,148,196,1)'],
      hoverBackgroundColor: ['rgba(0,148,196,1)'],
      data: [754],
      label: 'Account D'
    },
    {
      backgroundColor: ['rgba(104,200,222,1)'],
      hoverBackgroundColor: ['rgba(104,200,222,1)'],
      data: [1434],
      label: 'Account E'
    },
    {
      backgroundColor: ['rgba(165,175,35,1)'],
      hoverBackgroundColor: ['rgba(165,175,35,1)'],
      data: [148],
      label: 'Account F'
    },
    {
      backgroundColor: ['rgba(235,94,129,1)'],
      hoverBackgroundColor: ['rgba(235,94,129,1)'],
      data: [4161],
      label: 'Account G'
    },
    {
      backgroundColor: ['rgba(188,9,0,1)'],
      hoverBackgroundColor: ['rgba(188,9,0,1)'],
      data: [416],
      label: 'Account H'
    },
    {
      backgroundColor: ['rgba(137,116,114,1)'],
      hoverBackgroundColor: ['rgba(137,116,114,1)'],
      data: [632],
      label: 'Account I'
    },
    {
      backgroundColor: ['rgba(55,242,183,1)'],
      hoverBackgroundColor: ['rgba(55,242,183,1)'],
      data: [1854],
      label: 'Account J'
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
