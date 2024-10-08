import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  localItem: string;
  constructor() {
    this.localItem = localStorage.getItem('todos');

    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = Array.isArray(JSON.parse(this.localItem))
        ? JSON.parse(this.localItem)
        : [];
    }
  }
  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    // Save the updated todos array to localStorage
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
