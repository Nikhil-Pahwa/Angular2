import {Component} from "angular2/core";
import {TodoService} from "./services/todo-service";
import {TodoModel} from "./models/todo-model";

@Component({
    selector: 'todo-input',
    template: '<form (submit) = "onSubmit()"><input type="text" [(ngModel)] = "todoModel.title"></form>'
})

export class TodoInput{
    todoModel:TodoModel = new TodoModel();
    constructor(public todoService: TodoService) {
        console.log(todoService);
    }

    onSubmit() {
        this.todoService.todos.push(this.todoModel)
        this.todoModel = new TodoModel();
        console.log(this.todoService.todos);
    }
}