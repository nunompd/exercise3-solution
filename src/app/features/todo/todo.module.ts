import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './components/todo/todo.component';
import { TodoRoutingModule } from './todo-routing.module';

const COMPONENTS = [TodoComponent];

@NgModule({
  imports: [CommonModule, TodoRoutingModule],
  declarations: [...COMPONENTS],
})
export class TodoModule {}
