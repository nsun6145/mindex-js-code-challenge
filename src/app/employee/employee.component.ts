import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeService} from '../employee.service';
import { Employee } from '../employee';
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
  
  @Output() manage: EventEmitter<any> = new EventEmitter();
 
  constructor(private employeeService: EmployeeService) {
    this.reportingAmount = 0;
  }
  
  ngOnInit(): void {
    this.reportingAmount = this.getDirectReportingAmount(this.employee);
    if(this.reportingAmount > 0){
    this.setDirectReports(this.employee);
    }
  }
  
  getDirectReportingAmount(e: Employee): number {
    if(e){
    return (e.directReports ? e.directReports.length : 0);
    }
  }
  /*
  getIndirectReportingAmount(e: Employee): number {
    //need to make recursive calls for each employee within their direct reports
    if(e.directReports){
      from(e.directReports).pipe().subscribe();
    }
    
  }
  */
  setDirectReports(e: Employee): void {
  from(e.directReports).pipe(
      flatMap(id => <Observable<Employee>> 
			this.employeeService.get(id)
            )
    ).subscribe(emp => 
    this.reportingEmployees.push(emp));
  }
  
  sendEdit(): void{
    //send emitter data
  }
  
  sendDelete(): void{
    //send emitter data
  }
  
}
