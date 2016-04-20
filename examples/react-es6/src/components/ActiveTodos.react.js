import React, {Component} from 'react';

import TodoListApp from './TodoListApp.react';
import { ACTIVE_TODOS } from '../constants';

class ActiveTodos extends Component {

	render() {

		return (
			<TodoListApp nowShowing={ACTIVE_TODOS} />
		);

	}
}

export default ActiveTodos;
