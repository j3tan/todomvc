import React, {Component} from 'react';

import TodoList from './TodoList.react';

class TodoBody extends Component {

	constructor(props) {
		super(props);

		this.toggleAll = this.toggleAll.bind(this);
	}

	toggleAll(event) {
		var checked = event.target.checked;
		this.props.store.toggleAll(checked);
	}

	render() {
		const todos = this.props.todos;

		return (
			<section className="main">
				<input
					className="toggle-all"
					type="checkbox"
					onChange={this.toggleAll}
					checked={this.props.allTodosActive}
				/>
				<TodoList todos={todos} store={this.props.store}/>
			</section>
		);

	}

}

export default TodoBody;
