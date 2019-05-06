import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  employeess =[
    new Employee(1,'abby shabi','fill out internship form'),
    new Employee (2,'dammy shabi','Take out trash'),
    new Employee (3,'Funke shabi','develop an angular application'),
    new Employee (4,'Aramide shabi',''),
    
  ]

  addNewEmployee(employee){
    let employeessLength = this.employeess.length;
    employee.id=employeessLength+1;
    this.employeess.push(employee)

}

  toogleDetails(index){
    this.employeess[index].showDescription = !this.employeess[index].showDescription;
}
  constructor() { }

  ngOnInit() {
  }

}
