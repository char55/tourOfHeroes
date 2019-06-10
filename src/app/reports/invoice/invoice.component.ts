import { Component, OnInit, Input } from '@angular/core';
import { ReportsComponent } from '../reports.component'
import { Report } from '../report';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../print.service';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  jsonSelectedReport :string;
  selectedReport :Report;

  constructor(route: ActivatedRoute, private printService: PrintService) { 
    this.jsonSelectedReport = route.snapshot.params['selectedJSON'];
    this.selectedReport = JSON.parse(this.jsonSelectedReport);
  }

  ngOnInit() {
  }

}
