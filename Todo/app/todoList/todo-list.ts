import {Component} from 'angular2/core';
import {TodoService} from '../services/todo-service';

@Component({
    selector: 'todo-list',
    template: '<ul>\
        <li *ngFor="#ts of todoservice.todos"> \
            <span [hidden] = "ts.status == \'completed\'">{{ts.title}}</span>\
            <div>{{ts.status}}</div>\
            <button (click) = ts.toggled()>Toggled</button>\
        </li>\
        </ul>'
})

export class TodoList{
    constructor(public todoservice: TodoService) {

    }
};


