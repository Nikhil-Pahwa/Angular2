import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.helloworld';
import {TodoService} from "./services/todo-service";

bootstrap(AppComponent, [TodoService]);