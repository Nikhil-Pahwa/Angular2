import {Component, Input} from 'angular2/core';

@Component({
    selector: 'todo-render',
    template: '<style>\
                .completed { \
                    text-decoration: line-through; \
                } \
            </style> \
            <span [ngClass] = "todo.status">{{todo.title}}</span>\
            <div>{{todo.status}}</div>'
})

export class TodoRender{
    @Input() todo;
}