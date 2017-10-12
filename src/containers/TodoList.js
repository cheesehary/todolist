import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from '../components/Todo';
import { checkTodo, deleteTodo } from '../store/actions';

class TodoList extends Component {
  render() {
    return (
      <div>
        {Object.values(this.props.todos).map(todo => (
          <Todo key={todo.id} {...todo}
                onCheck={() => this.props.check(todo.id)}
                onDelete={() => this.props.delete(todo.id)} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ todos: state.todos });

const mapDispatchToProps = dispatch => ({
  check: id => dispatch(checkTodo(id)),
  delete: id => dispatch(deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);