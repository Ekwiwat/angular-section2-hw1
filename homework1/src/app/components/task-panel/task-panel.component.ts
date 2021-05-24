import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-task';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-task-panel',
  templateUrl: './task-panel.component.html',
  styleUrls: ['./task-panel.component.css']
})
export class TaskPanelComponent implements OnInit {
  tasks: Task[] = TASKS

  today = new Date
  nameInp: string
  descriptionInp: string

  @Output()
  OnSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  select() {
    this.OnSelected.emit();
  }

  delTask(task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

}
