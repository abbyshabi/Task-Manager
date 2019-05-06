import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import {Employee} from '../employee';


@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {
  newEmployee = new Employee(0,"","");
  @Output() addEmployee = new EventEmitter<Employee>();
  
  submitEmployee(){
    this.addEmployee.emit(this.newEmployee);
    this.newEmployee = new Employee(0,"","");
}
  constructor() { }

  ngOnInit() {
  }

}

