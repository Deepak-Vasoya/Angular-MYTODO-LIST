import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

  @Input() todo: Todo;
  @Input() i:  number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  onclick(todo: Todo) {
    console.log("On Clcik has been trigerred.")
    this.todoDelete.emit(todo);
  }
  
  onCheckboxClick(todo){
    this.todoCheckbox.emit(todo);
  }

}
