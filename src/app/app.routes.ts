import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { TodoComponent } from './pages/todo/todo.component';

export const routes: Routes = [
    { path: '',
      component: LayoutComponent,
      children: [
            {
              path: 'home', 
              component: HomeComponent, 
            },
            {
              path: 'todo', 
              component: TodoComponent, 
            }
        ]
    },
];
