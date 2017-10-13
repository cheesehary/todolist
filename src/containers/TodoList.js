import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from '../components/Todo';
import { checkTodo, deleteTodo } from '../store/actions';
import { getSequencedTodos } from '../selectors';

class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <Todo key={todo.id} {...todo}
                onCheck={() => this.props.check(todo.id)}
                onDelete={() => this.props.delete(todo.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ todos: getSequencedTodos(state) });

const mapDispatchToProps = dispatch => ({
  check: id => dispatch(checkTodo(id)),
  delete: id => dispatch(deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);