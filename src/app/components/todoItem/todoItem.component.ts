import { Component,Input } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todoItem.component.html',
  styleUrl: './todoItem.component.scss'
})
export class TodoItemComponent {
  @Input() todo:Todo|any = undefined;
}
