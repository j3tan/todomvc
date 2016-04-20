import React, {Component} from 'react';

import TodoListApp from './TodoListApp.react';
import { COMPLETED_TODOS } from '../constants';

class CompletedTodos extends Component {

	render() {

		return (
			<TodoListApp nowShowing={COMPLETED_TODOS} />
		);

	}
}

export default CompletedTodos;
