import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { TodosComponent } from './pages/todos/todos.component';

export const routes: Routes = [
    { path: '',
      component: LayoutComponent,
      children: [
            {
              path: 'home', 
              component: HomeComponent, 
            },
            {
              path: 'todos', 
              component: TodosComponent, 
            }
        ]
    },
];
