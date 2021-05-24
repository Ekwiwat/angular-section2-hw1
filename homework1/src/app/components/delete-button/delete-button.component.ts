import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent implements OnInit {
  faTrashAlt = faTrashAlt

  @Output()
  OnDelClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  delClick() {
    this.OnDelClick.emit();
  }

}
