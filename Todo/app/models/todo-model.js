System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TodoModel;
    return {
        setters:[],
        execute: function() {
            TodoModel = (function () {
                function TodoModel() {
                    this.status = "started";
                    this.title = "";
                }
                TodoModel.prototype.toggled = function () {
                    this.status = (this.status == 'started') ? this.status = 'completed' : this.status = 'started';
                };
                return TodoModel;
            }());
            exports_1("TodoModel", TodoModel);
        }
    }
});
//# sourceMappingURL=todo-model.js.map