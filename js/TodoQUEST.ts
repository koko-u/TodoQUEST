module TodoQuest {
    export class Todo {
        name_: string;
        tasks_: Task[];
        get name(): string {
            return this.name_;
        }
        getTask(i: number): Task {
            return this.tasks_[i];
        }
    }
    export class TodoList {
        list_: Todo[];
        pop(): Todo {
            return this.list_[0];
        }
    }
    export class Task {
        title_: string;
        done_: bool;
        get title(): string {
            return this.title_;
        }
    }

    export class Brave { // 勇者
        level_: number = 0;
        list_: TodoList;
        constructor(public name: string) {
            this.list_ = new TodoList();
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