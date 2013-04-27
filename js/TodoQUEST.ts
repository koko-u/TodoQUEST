module TodoQuest {
    export class Task {
        title_: string;
        done_: bool;
        constructor(title: string) {
            this.title_ = title;
            this.done_ = false;
        }
        get title(): string {
            return this.title_;
        }
    }
    export class Todo {
        name_: string;
        tasks_: Task[];
        deadline_: Date;
        constructor(name: string, tasks: string[], deadline: Date) {
            this.name_ = name;
            for (var i = 0 ; i < tasks.length ; i++) {
                var task = new Task(tasks[i]);
                this.tasks_.push(task);
            }
            this.deadline_ = deadline;
        }
        get name(): string {
            return this.name_;
        }
        getTask(i: number): Task {
            return this.tasks_[i];
        }
        getDeadLine(): Date {
            return this.deadline_;
        }
    }
    export class TodoList {
        list_: Todo[];
        pop(): Todo {
            return this.list_[0];
        }
        push(todo: Todo) {
            this.list_.push(todo);
        }
        static load(obj): TodoList {
            var list = new TodoList();
            for (var i = 0 ; i < obj.length ; i++) {
                list.push(new Todo(obj[i]["title"], obj[i]["tasks"], obj[i]["deadline"]));
            }
            return list;
        }
    }

    export class Brave {
        level_: number = 0;
        name_: string;
        list_: TodoList;
        constructor(public name: string) {
            this.name_ = name;
            this.list_ = TodoList.load(
                [{
                        "title": "Todoアプリ作成",
                        "tasks": [
                            "index.html作成",
                            "stylesheet作成",
                            "javascript作成",
                            "画像ファイル作成",
                        ],
                        "deadline": "2013-04-27",
                },
                 {
                     "title": "発表",
                     "tasks": [
                         ""
                     ],
                     "deadline": "2013-04-30",
                 }
                ]
            );
        }
        get level(): number {
            return this.level_;
        }
        addTodo(todo: Todo) {
        }
        closeTask(todo: Todo, task: Task) {
        }
        popTodo(): Todo {
            return this.list_.pop();
        }
    }
}