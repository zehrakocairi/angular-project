import { Component } from '@angular/core';
import { TodoService } from '../../services/todo/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

 constructor(private _todoService:TodoService) { 
    this.getItems();
  }
  
  public todos: {id:number; title: string; completed: boolean }[] = [];

 getItems(){
    this.todos = this._todoService.getTodos();
  }
}
