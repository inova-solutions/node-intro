import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { delay, map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class TodoService {
  private api = 'http://localhost:3000/todo';

  constructor(private http: HttpClient) { }

  public getTodos() {
    return this.http.get<string[]>(this.api).pipe(map(todos => todos.reverse()));
  }

  public addTodo(todo: string) {
    return this.http.post(this.api, { todo }, { responseType: 'text' }).pipe(delay(1000));
  }

  public clearTodos() {
    return this.http.delete(this.api);
  }

}