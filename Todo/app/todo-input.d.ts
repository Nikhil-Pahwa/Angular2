import { TodoService } from "./services/todo-service";
import { TodoModel } from "./models/todo-model";
export declare class TodoInput {
    todoService: TodoService;
    todoModel: TodoModel;
    constructor(todoService: TodoService);
    onSubmit(): void;
}
