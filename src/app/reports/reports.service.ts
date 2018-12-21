import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  DATA = [
    {
      id: 1,
      name: 'report1',
      graph: 'one'
    },
    {
      id: 2,
      name: 'report2',
      graph: 'two'
    },
    {
      id: 3,
      name: 'report3',
      graph: 'three'
    }
  ];


}
