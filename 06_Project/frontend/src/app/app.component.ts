import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public todos = new BehaviorSubject<string[]>([]);
  public addInProgress = false;

  constructor(private todoService: TodoService) { }

  public ngOnInit(): void {
    this.todoService.getTodos()
      .subscribe(todos => this.todos.next(todos));
  }

  public onAdd(form: NgForm): void {
    const { todo } = form.value;
    this.addInProgress = true;
    this.todoService.addTodo(todo)
      .pipe(
        switchMap(() => this.todoService.getTodos()),
        finalize(() => this.addInProgress = false)
      )
      .subscribe(todos => {
        form.resetForm();
        this.todos.next(todos);
      });
  }

  public onClear(): void {
    this.todoService.clearTodos()
      .subscribe(() => this.todos.next([]));
  }

  public onReload(): void {
    this.todoService.getTodos()
      .subscribe(todos => this.todos.next(todos));
  }

}
