import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITodoItem } from '../../interfaces/todo-items.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoItems$: Observable<ITodoItem[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    const todoItems$ = this.todoService.getTodoItems();
    const todoItemsFromExtApp$ = this.todoService.getTodoItemsFromExternalApp();

    const observables$ = forkJoin([todoItems$, todoItemsFromExtApp$]);
    this.todoItems$ = observables$.pipe(
      map(([obs1, obs2]) => [...obs1, ...obs2])
    );
  }
}
