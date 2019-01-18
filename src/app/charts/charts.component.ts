// import { Component, OnInit } from '@angular/core';
import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  @ViewChild('container') chartContainer: any;
  constructor(public el: ElementRef ) { }

  ngOnInit() {
    console.log(this);
    this.createBarChart();
    this.createPieChart();
  }

  createBarChart() {
    // Create the chart
    Highcharts.chart('bar-container', {
      chart: {
          type: 'column'
      },
      title: {
        text: ''
      },

      xAxis: {
          type: 'category',
          labels: {
            style: {
                color: '#c5c5c5',
                fill: '#c5c5c5',
                fontSize: '12px'
            },
       },
      //  lineColor: '#d8efe3',
      //  gridLineColor: '#d8efe3',
       title: {
           text: null
       }
      },
      yAxis: {
          title: {
              text: null
          }

      },
      legend: {
          enabled: false
      },
      plotOptions: {
          series: {
              // borderWidth: 0,
              // dataLabels: {
              //     enabled: true,
              //     format: '{point.y:.1f}%'
              // }
          }
      },

      tooltip: {
          // headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<b>{point.y:.2f}%</b>',
          backgroundColor: '#000',
          style: {
            color: '#fff'
          }

      },

      'series': [
          {
              'name': 'Hours Per Period',
               color: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, '#05e06f'],
                    [1, '#00b1f5']
                ]
               },
              'data': [
                  {
                      'name': 'Week 1',
                      'y': 99.74,
                      'drilldown': 'Week 1'
                  },
                  {
                      'name': 'Week 2',
                      'y': 45.57,
                      'drilldown': 'Week 2'
                  },
                  {
                      'name': 'Week 3',
                      'y': 37.23,
                      'drilldown': 'Week 3'
                  },
                  {
                      'name': 'Week 4',
                      'y': 80.58,
                      'drilldown': 'Week 4'
                  },
                  {
                      'name': 'Week 5',
                      'y': 74.02,
                      'drilldown': 'Week 5'
                  }
              ]
          }
      ],
      'drilldown': {
          activeAxisLabelStyle: {
            cursor: 'pointer',
            color: '#c5c5c5',
            fill: '#c5c5c5',
            fontSize: '12px',
            textDecoration: 'none'
          },
          'series': [
              {
                  'name': 'Week 1',
                  'id': 'Week 1',
                  'data': [
                      [
                          'Monday',
                          20.1
                      ],
                      [
                          'Tuesday',
                          61.3
                      ],
                      [
                          'Wednesday',
                          53.02
                      ],
                      [
                          'Thursday',
                          71.4
                      ],
                      [
                          'Friday',
                          40.88
                      ],
                      [
                          'Saturday',
                          30.56
                      ]
                  ]
              },
              {
                  'name': 'Week 2',
                  'id': 'Week 2',
                  'data': [
                      [
                          'Monday',
                          90.1
                      ],
                      [
                          'Tuesday',
                          71.3
                      ],
                      [
                          'Wednesday',
                          53.02
                      ],
                      [
                          'Thursday',
                          81.4
                      ],
                      [
                          'Friday',
                          50.88
                      ]
                  ]
              },
              {
                  'name': 'Week 3',
                  'id': 'Week 3',
                  'data': [
                      [
                          'Monday',
                          40.1
                      ],
                      [
                          'Tuesday',
                          71.3
                      ],
                      [
                          'Wednesday',
                          53.02
                      ],
                      [
                          'Thursday',
                          51.4
                      ]
                  ]
              },
              {
                  'name': 'Week 4',
                  'id': 'Week 4',
                  'data': [
                      [
                          'Monday',
                          30.1
                      ],
                      [
                          'Tuesday',
                          71.3
                      ],
                      [
                          'Wednesday',
                          53.02
                      ],
                      [
                          'Thursday',
                          81.4
                      ],
                      [
                          'Friday',
                          20.88
                      ]
                  ]
              },
              {
                  'name': 'Week 5',
                  'id': 'Week 5',
                  'data': [
                      [
                          'Monday',
                          60.1
                      ],
                      [
                          'Tuesday',
                          31.3
                      ],
                      [
                          'Wednesday',
                          53.02
                      ],
                      [
                          'Thursday',
                          81.4
                      ]
                  ]
              }
          ]
      }
    });
  }

  createPieChart(){
    Highcharts.chart('pie-container', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: null
      },
      tooltip: {
          pointFormat: '{point.percentage:.1f}%',
          backgroundColor: '#000',
          style: {
            color: '#fff'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              colors: [
                '#67D5FF',
                '#3AC9FF',
                '#00b5fa',
                '#A6E6FF',
                '#8CDFFF',
                '#A1DEF7',
                '#00b5fg',
                '#00b5fh'
              ],
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              }
          }
      },
      series: [{
          name: 'No shows',
          // colorByPoint: true,
          data: [{
              name: 'No Reason',
              y: 12,
              // sliced: true,
              selected: true
          }, {
              name: 'Paid Leave',
              y: 20
          }, {
              name: 'Vacation',
              y: 40
          }, {
              name: 'Sent Away',
              y: 15
          }, {
              name: 'Sick',
              y: 13
          }]
      }]
    });
  }
}
