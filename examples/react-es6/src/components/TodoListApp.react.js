import React, {Component} from 'react';

import TodoHeader from './TodoHeader.react';
import TodoBody from './TodoBody.react';
import TodoFooter from './TodoFooter.react';

import TodoStore from '../stores/TodoStore';

import {ACTIVE_TODOS, COMPLETED_TODOS} from '../constants';

class TodoListApp extends Component {

	constructor(props) {
		super(props);

		this.store = new TodoStore('react-es6-todos');
		this.state = {
			todos: this.store.todos
		}
		this.store.subscribe(this.updateTodos.bind(this));
	}

	updateTodos() {
		this.setState({
			todos: this.store.todos
		});
	}

	render() {
		const todos = this.state.todos;

		const activeTodoCount = todos.reduce((accum, todo)  => todo.completed ? accum : accum + 1, 0);
		const allTodosActive = activeTodoCount === todos.length;

		const completedCount = todos.length - activeTodoCount;

		const shownTodos = todos.filter(function (todo) {
			switch (this.props.nowShowing) {
				case ACTIVE_TODOS:
					return !todo.completed;
				case COMPLETED_TODOS:
					return todo.completed;
				default:
					return true;
			}
		}, this);

		return (
			<div>
				<TodoHeader store={this.store} />
				<TodoBody todos={shownTodos} allTodosActive={allTodosActive} store={this.store} />
				<TodoFooter
					store={this.store}
					count={activeTodoCount}
					completedCount={completedCount}
					nowShowing={this.props.nowShowing}
				/>
			</div>
		);

	}
}

export default TodoListApp;
