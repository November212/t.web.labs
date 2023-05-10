interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export const todoModel = {
    todos: [] as Todo[],
    add(todo: Todo) {
        this.todos.push(todo);
    },
    remove(todo: Todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    },
    get completedTodos() {
        return this.todos.filter((todo) => todo.completed);
    },
    get incompleteTodos() {
        return this.todos.filter((todo) => !todo.completed);
    },
};
