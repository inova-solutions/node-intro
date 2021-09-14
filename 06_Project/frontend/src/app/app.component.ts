import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  /**
   * TASK:
   * - initialize this property with a behavior subject
   * - give it a default value of an empty array
   * 
   * the content of this behavior subject will be rendered in the DOM
   */
  public todos;

  public addInProgress = false;

  constructor(private todoService: TodoService) { }

  public ngOnInit(): void {
    this.onReload();
  }

  public onAdd(form: NgForm): void {
    const { todo } = form.value;

    /**
     * TASK:
     * - set addInProgress to true
     * - add todo then load all todos to show them + the new one in the DOM (hint: use RxJS switch map operator)
     * - reset form (hint: form.resetForm())
     * - set addInProgress to false, even if the API calls fail (hint: use RxJS finalize operator)
     */
  }

  public onClear(): void {
    /**
     * TASK:
     * - clear all todos
     * - update behavior subject
     */
  }

  public onReload(): void {
    /**
     * TASK:
     * - load all todos
     * - update behavior subject
     */
  }

}
