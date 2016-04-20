import {store, uuid, extend} from '../utils';

class TodoStore {

	constructor(key) {
		// Generic "model" object. You can use whatever
		// framework you want. For this application it
		// may not even be worth separating this logic
		// out, but we do this to demonstrate one way to
		// separate out parts of your application.
		this.key = key;
		this.todos = store(key);
		this.onChanges = [];
	}

	subscribe(onChange) {
		this.onChanges.push(onChange);
	}

	inform() {
		store(this.key, this.todos);
		this.onChanges.forEach(function (cb) { cb(); });
	}

	addTodo(title) {
		this.todos = this.todos.concat({
			id: uuid(),
			title: title,
			completed: false
		});

		this.inform();
	}

	toggleAll(checked) {
		// Note: it's usually better to use immutable data structures since they're
		// easier to reason about and React works very well with them. That's why
		// we use map() and filter() everywhere instead of mutating the array or
		// todo items themselves.
		this.todos = this.todos.map(function(todo) {
			return extend({}, todo, {completed: checked});
		});

		this.inform();
	}

	toggle(todoToToggle) {
		this.todos = this.todos.map(function(todo) {
			return todo !== todoToToggle ?
				todo :
				extend({}, todo, {completed: !todo.completed});
		});

		this.inform();
	}

	destroy(todo) {
		this.todos = this.todos.filter(function(candidate) {
			return candidate !== todo;
		});

		this.inform();
	}

	save(todoToSave, text) {
		this.todos = this.todos.map(function(todo) {
			return todo !== todoToSave ? todo : extend({}, todo, {title: text});
		});

		this.inform();
	}

	clearCompleted() {
		this.todos = this.todos.filter(function(todo) {
			return !todo.completed;
		});

		this.inform();
	}

}

export default TodoStore;
