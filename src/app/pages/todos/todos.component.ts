import { Component } from '@angular/core';
import { TodoService } from '../../services/todo/todo.service';
import { Todo } from '../../models/todo.model';
import { TodoItemComponent } from '../../components/todoItem/todoItem.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {

 constructor(private _todoService:TodoService) { 
    this.getItems();
  }
  
  public todos: Todo[] = [];

 getItems(){
    this.todos = this._todoService.getTodos();
  }
}
