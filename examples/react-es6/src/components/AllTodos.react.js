import React, {Component} from 'react';

import TodoListApp from './TodoListApp.react';
import { ALL_TODOS } from '../constants';

class AllTodos extends Component {

	render() {

		return (
			<TodoListApp nowShowing={ALL_TODOS} />
		);

	}
}

export default AllTodos;
