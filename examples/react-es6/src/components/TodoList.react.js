import React, {Component} from 'react';

import TodoItem from './TodoItem.react';
import {ACTIVE_TODOS, COMPLETED_TODOS} from '../constants';

class TodoList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			editing: null
		};

		this.cancel = this.cancel.bind(this);
	}

	toggle(todo) {
		this.props.store.toggle(todo);
	}

	destroy(todo) {
		this.props.store.destroy(todo);
	}

	edit(todo) {
		this.setState({editing: todo.id});
	}

	save(todo, text) {
		this.props.store.save(todo, text);
		this.setState({editing: null});
	}

	cancel() {
		this.setState({editing: null});
	}

	render() {
		const todos = this.props.todos;

		const shownTodos = todos.filter(todo => {
			switch (this.state.nowShowing) {
				case ACTIVE_TODOS:
					return !todo.completed;
				case COMPLETED_TODOS:
					return todo.completed;
				default:
					return true;
			}
		});

		const todoItems = shownTodos.map(todo =>
			<TodoItem
				key={todo.id}
				todo={todo}
				onToggle={this.toggle.bind(this, todo)}
				onDestroy={this.destroy.bind(this, todo)}
				onEdit={this.edit.bind(this, todo)}
				editing={this.state.editing === todo.id}
				onSave={this.save.bind(this, todo)}
				onCancel={this.cancel}
			/>
		);

		return (
			<ul className="todo-list">
				{todoItems}
			</ul>
		);

	}

}

export default TodoList;

