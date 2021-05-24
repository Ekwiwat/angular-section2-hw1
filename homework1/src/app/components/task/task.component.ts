import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  faTrashAlt = faTrashAlt


  @Input()
  task = Task;

  @Output()
  OnDelClick = new EventEmitter();
  @Output()
  OnSelected: EventEmitter<TaskComponent> = new EventEmitter();


  isSelected: boolean;

  constructor() { }

  ngOnInit(): void {
  }


  select() {
    this.OnSelected.emit(this);
  }
  delClick() {
    this.OnDelClick.emit();
  }

}
