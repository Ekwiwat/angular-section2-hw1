import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../Task';
import { TASKS } from '../../mock-task';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  tasks: Task[] = TASKS
  faPlus = faPlus
  faTrashAlt = faTrashAlt
  today = new Date
  nameInp: string
  descriptionInp: string
  isShow: boolean = true;
  title: string
  desc: string


  @ViewChildren(TaskComponent)
  taskItems: QueryList<TaskComponent>;




  constructor() { }

  ngOnInit(): void {
  }
  addTask(nameInp, descriptionInp) {
    this.tasks.push({ name: nameInp, description: descriptionInp });
  }

  delTask(task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  selectedTask(tComponent: TaskComponent) {
    this.taskItems.forEach(t => {
      t.isSelected = false;
    });
    tComponent.isSelected = true;
    if (tComponent.isSelected) {
      this.isShow = false;
      this.title = tComponent.task['name'];
      this.desc = tComponent.task['description'];
    } else {
      this.isShow = true;

    }

  }

}
  // onClick(task) {
  //   if (!this.toDo.includes(task)) { this.toDo.push(task); }

  // }



  // delTask(x) {
  //   this.toDo.splice(x, 1);
  // }


