import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rightclick',
  templateUrl: './rightclick.component.html',
  styleUrls: ['./rightclick.component.css']
})
export class RightclickComponent implements OnInit {
  @Input() x = 0;
  @Input() y = 0;

  nRightClick = 0;
  nAny = 0;
  options = ['one', 'two', 'three'];
  action = 'poop';
  opT = true;
  constructor() { }

  ngOnInit() {
  }

  offClick(): void {
    this.opT = true;
    this.nAny++;
  }

  onRightClick($event) {
    this.nRightClick++;
    this.opT = !this.opT;
    this.x = $event.clientX;
    this.y = $event.clientY;
    console.log($event);
    console.log(this.x);
    console.log(this.y);
    return false;
  }

  addOne(): void {
    this.action = 'One';
  }

  addTwo(): void {
    this.action = 'Two';
  }
  addThree(): void {
    this.action = 'Three';
  }
}

// figure out how to right click on to open display
// and hover off to close display
