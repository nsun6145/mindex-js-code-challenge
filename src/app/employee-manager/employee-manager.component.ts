import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-employee-manager',
  templateUrl: './employee-manager.component.html',
  styleUrls: ['./employee-manager.component.css']
})
export class EmployeeManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
