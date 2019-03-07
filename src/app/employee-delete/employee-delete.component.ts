import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeListComponent } from '../employee-list/employee-list.component';


@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  employeeName: string;

  constructor() { }

  ngOnInit() {
  }

}
