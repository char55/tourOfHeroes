import { Component, OnInit } from '@angular/core';

import { ScrollingService } from './scrolling.service';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-scrolling',
  templateUrl: './scrolling.component.html',
  styleUrls: ['./scrolling.component.css']
})
export class ScrollingComponent implements OnInit {

  items = ['Zero', 'One', 'Two', 'Three'];
  keys = Object.keys(this.scrollingService.test[0]);

  constructor(public scrollingService: ScrollingService) { }

  ngOnInit() {
  }

}
