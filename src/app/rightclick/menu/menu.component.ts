import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() x = 0;
  @Input() y = 0;

  nRightClick = 0;
  nAny = 0;
  options = ['one', 'two', 'three'];
  opT = false;

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

}
