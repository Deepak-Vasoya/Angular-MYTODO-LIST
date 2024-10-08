import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  title:string = "";
  description:string = "";

  onSubmit(){
    const todo = {
      sno:8,
      title: this.title,
      description: this.description,
      active:true
    }
    this.todoAdd.emit(todo);
  }

 
}
