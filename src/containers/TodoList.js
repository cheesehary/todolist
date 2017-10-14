import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from '../components/Todo';
import Loading from '../components/Loading';
import AddTodo from './AddTodo';
import { checkTodo, deleteTodo, fetchTodos } from '../store/actions';
import { getSequencedTodos } from '../selectors';

class TodoList extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      this.props.loading ? (
        <Loading />
      ) : (
        <div className="todolist">
          {this.props.todos.map(todo => (
            <Todo key={todo.id} {...todo}
                  onCheck={() => this.props.check(todo.id)}
                  onDelete={() => this.props.delete(todo.id)}
            />
          ))}
          <AddTodo />
        </div>
      )
    );
  }
}

const mapStateToProps = state => ({ 
  todos: getSequencedTodos(state),
  loading: state.todos.loading
});

const mapDispatchToProps = dispatch => ({
  check: id => dispatch(checkTodo(id)),
  delete: id => dispatch(deleteTodo(id)),
  fetch: () => dispatch(fetchTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);