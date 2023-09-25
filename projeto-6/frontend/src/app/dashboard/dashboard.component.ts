import { Component, ViewChild } from '@angular/core';

import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  ApexNonAxisChartSeries,
  ApexResponsive
} from "ng-apexcharts";
import { DashboardService } from '../services/dashboard.service';
import { IChart } from '../interfaces/dashboard';

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

export type ChartOptionsPie = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild("chartColumn") chartColumn: ChartComponent;
  public chartOptionsColumns: Partial<ChartOptions>;

  @ViewChild("chartPie") chartPie: ChartComponent;
  public chartOptionsPie: Partial<ChartOptionsPie>;

  constructor(
    private dashboardService: DashboardService
  ) {



  }

  ngOnInit() {
    this.dashboardService.findAll().subscribe((res: any) => {
      let chart: IChart = res.charts
      let chartSchooling: any = chart.schooling

      let dataColumn = [
          chartSchooling.Analfabeto,
          chartSchooling.FundamentalCompleto,
          chartSchooling.MedioIncompleto,
          chartSchooling.MedioCompleto,
          chartSchooling.SuperiorIncompleto,
          chartSchooling.SuperiorCompleto,
          chartSchooling.Mestrado,
          chartSchooling.Doutorado,
          chartSchooling.Ignorado,
        ]

        this.chartOptionsColumns = {
          series: [
            {
              name: "Candidatos",
              data: dataColumn
            }
          ],
          chart: {
            height: 350,
            width: 500,
            type: "bar",
          },
          colors: [
            "#008FFB",
            "#00E396",
            "#FEB019",
            "#FF4560",
            "#775DD0",
            "#546E7A",
            "#26a69a",
            "#D10CE8",
            "#212CB8"
          ],
          plotOptions: {
            bar: {
              columnWidth: "45%",
              distributed: true
            }
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          grid: {
            show: false
          },
          xaxis: {
            categories: [
              ["Analfabeto"],
              ["Fundamental", "Completo"],
              ["Médio", "Incompleto"],
              ["Médio","Completo"],
              ["Superior", "Incompleto"],
              ["Superior" , "Completo"],
              ["Mestrado"],
              ["Doutorado"],
              ["Ignorado"]
            ],
            labels: {
              style: {
                colors: [
                  "#008FFB",
                  "#00E396",
                  "#FEB019",
                  "#FF4560",
                  "#775DD0",
                  "#546E7A",
                  "#26a69a",
                  "#D10CE8",
                  "#212CB8"
                ],
                fontSize: "12px"
              }
            }
          }
        };

      this.chartOptionsPie = {
        series: [
          chart.statusRegisters.aguardando,
          chart.statusRegisters.reprovado,
          chart.statusRegisters.aprovado,
        ],
        chart: {
          width: 380,
          type: "pie"
        },
        labels: ["Aguardando", "Reprovado", "Aprovado"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };
    })
  }
}
