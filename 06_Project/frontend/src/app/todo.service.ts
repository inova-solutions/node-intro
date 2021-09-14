import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private api = 'http://localhost:3000/todo';

  constructor(private http: HttpClient) { }

  public getTodos() {
    /**
     * TASK:
     * reverse the list of todos before returning it
     * hint: use RxJS map operator
     */
    return this.http.get<string[]>(this.api);
  }

  public addTodo(todo: string) {
    /**
     * TASK:
     * give this observable 1 second delay to simulate a heavy API call
     * hint: use RxJS delay operator
     */
    return this.http.post(this.api, { todo }, { responseType: 'text' });
  }

  public clearTodos() {
    return this.http.delete(this.api);
  }

}