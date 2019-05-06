import { Component, OnInit,Input } from '@angular/core';
import {Employee} from '../employee'
import {Task} from '../task'

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {
  @Input() employee:Employee;
  tasks =[
    new Task(1,'wash')
  ]


  constructor() { }

  ngOnInit() {
  }

}
