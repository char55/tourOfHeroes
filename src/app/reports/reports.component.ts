import { Component, OnInit } from '@angular/core';

import { ReportsService } from './reports.service';
import { Report } from './report';
import { PrintService } from './print.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  selectedReport :Report = this.reportsService.DATA[0];
  jsonSelectedReport :string;

  onSelect(report: Report): void {
    this.selectedReport = report;
  }

  print(): void {
    console.log('print')
    window.print()
    // redirect to reports(print:print/invoice) and pass json of selectedReport
    this.jsonSelectedReport = JSON.stringify(this.selectedReport)
    this.printService
        .printDocument('invoice', this.jsonSelectedReport);
  }

  constructor(public reportsService: ReportsService, public printService: PrintService) { }

  ngOnInit() {
  }

}
