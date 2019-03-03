import {Component, OnInit, Input} from '@angular/core';

import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import { Observable, from } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{

  @Input() employee: Employee;
  @Input() reportingAmount: number;
  
  @Input() reportingEmployees: Employee[] = [];
  /*
  [
      {
        id: 1,
        firstName: 'Brian',
        lastName: 'McGee',
        position: 'CEO',
        directReports: [2, 3]
      },
      {
        id: 2,
        firstName: 'Homer',
        lastName: 'Thompson',
        position: 'Dev Manager',
        directReports: [4]
      },
    ];
  */
  constructor(private employeeService: EmployeeService) {
    this.reportingAmount = 0;
  }
  
  ngOnInit(): void {
    this.reportingAmount = this.getDirectReportingAmount(this.employee);
    this.setDirectReports(this.employee);
  }
  
  getDirectReportingAmount(e: Employee): number {
    if(e){
    return (e.directReports ? e.directReports.length : 0);
    }
  }
  

  setDirectReports(e: Employee): void {
  
  from(e.directReports).pipe(
      flatMap(id => <Observable<Employee>> 
			this.employeeService.get(id)
            ).subscribe(
            emp => this.reportingEmployees.push(emp);
            )
    );
  }
  
}
