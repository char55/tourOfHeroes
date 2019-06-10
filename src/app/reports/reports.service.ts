import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  DATA = [
    {
      id: 1,
      name: 'report1',
      graph: 'one',
      icon: 'assets/icons/chart.png'
    },
    {
      id: 2,
      name: 'report2',
      graph: 'two',
      icon: 'assets/icons/pie.jpg'
    },
    {
      id: 3,
      name: 'report3',
      graph: 'three',
      icon: 'assets/icons/pie.jpg'
    }
  ];


}
