import React, {Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import AllTodos from './components/AllTodos.react';
import ActiveTodos from './components/ActiveTodos.react';
import CompletedTodos from './components/CompletedTodos.react';

class App extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={AllTodos}/>
			<Route path="active" component={ActiveTodos}/>
			<Route path="completed" component={CompletedTodos} />
		</Route>
	</Router>
), document.querySelector('.todoapp'));
