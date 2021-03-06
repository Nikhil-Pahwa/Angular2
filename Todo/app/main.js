System.register(['angular2/platform/browser', './app.helloworld', "./services/todo-service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_helloworld_1, todo_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_helloworld_1_1) {
                app_helloworld_1 = app_helloworld_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_helloworld_1.AppComponent, [todo_service_1.TodoService]);
        }
    }
});
//# sourceMappingURL=main.js.map