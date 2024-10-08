import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  localItem: string;
  constructor() {
    this.localItem = localStorage.getItem('todos');

    if (this.localItem == null) {
      this.todos = [
        // {
        //   sno:1,
        //   title: "This is title1",
        //   description: "desc for todo",
        //   active: true
        // },
        // {
        //   sno:2,
        //   title: "This is title2",
        //   description: "desc for todo",
        //   active: true
        // },
        // {
        //   sno:3,
        //   title: "This is title3",
        //   description: "desc for todo",
        //   active: true
        // }
      ];
    } else {
      this.todos = JSON.parse(this.localItem);
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
    localStorage.setItem('todos', JSON.stringify(todo));
  }
}
