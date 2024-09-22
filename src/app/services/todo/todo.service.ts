import { Injectable } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor() { }

  todos:Todo[]= [
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: false },
    { id: 3, title: 'Todo 3', completed: false },
  ];

  getTodos() {
    return this.todos;
  }
}
