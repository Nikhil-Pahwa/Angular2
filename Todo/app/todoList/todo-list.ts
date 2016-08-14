import {Component} from 'angular2/core';
import {TodoService} from '../services/todo-service';
import {TodoRender} from '../todo-render/todo-render';
import {SearchPipe} from '../searchPipe/search-pipe';

@Component({
    selector: 'todo-list',
    directives: [TodoRender],
    pipes: [SearchPipe],
    template: '<ul>\
        <li *ngFor="#ts of todoservice.todos | search">\
            <todo-render [todo] = "ts"></todo-render>\
            <button (click) = ts.toggled()>Toggled</button>\
        </li>\
        </ul>'
})

export class TodoList{
    constructor(public todoservice: TodoService) {

    }
};


