angular.module('todoApp', [])
    .controller('TodoListController', function() {
        var todoList = this;

        todoList.todos = [//model for the view
            {text:'learn AngularJS', done:true},
            {text:'build an AngularJS app', done:false}];

        todoList.addTodo = function() {
            todoList.todos.push({text:todoList.todoText,done:false}); //push a new text into the array of todos
            todoList.todoText = ''; //clear the text input after storing
        };

        /**
         * Count - the number of items remaining in the list
         * @returns {number}
         */
        todoList.remaining = function() {
            var remainingItems=0;
            angular.forEach(todoList.todos,function(todo){
                if(!todo.done){
                    remainingItems=remainingItems+1;
                }
            })
            return remainingItems;
        };
        /**
         * On Archive, clear the done items and retain the remaining items in the list
         */
        todoList.archive = function() {
            var oldTodos = todoList.todos;
            todoList.todos=[] //flush the model
            angular.forEach(oldTodos,function (oldtodo) {
                if(!oldtodo.done)
                {
                    todoList.todos.push(oldtodo)//retain the undone items and update the model
                }
            })
        };
    });