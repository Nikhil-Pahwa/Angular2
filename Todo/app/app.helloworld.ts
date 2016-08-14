import {Component} from 'angular2/core';
import {TodoInput} from './todo-input';
import {TodoList} from './todoList/todo-list';

@Component({
    selector: 'hello-world',
    directives: [TodoInput, TodoList],
    template: '<h1>Hello World!</h1><todo-input></todo-input><todo-list></todo-list>'
})

export class AppComponent {
}