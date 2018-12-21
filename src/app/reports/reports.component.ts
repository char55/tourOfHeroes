import { Component, OnInit } from '@angular/core';

import { ReportsService } from './reports.service';
import { Report } from './report';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  selectedReport: Report;

  onSelect(report: Report): void {
    this.selectedReport = report;
  }

  constructor(public reportsService: ReportsService) { }

  ngOnInit() {
  }

}
