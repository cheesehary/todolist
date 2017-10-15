import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from '../components/Todo';
import Loading from '../components/Loading';
import AddBtn from '../components/AddBtn';
import AddInput from '../components/AddInput';
import { checkTodo, deleteTodo, fetchTodos, addTodo } from '../store/actions';
import { getSequencedTodos } from '../selectors';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adding: false,
      newLabel: '',
      isErr: false
    }
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  revert() {
    this.setState({
      adding: false,
      newLabel: '',
      isErr: false
    });
  }

  onAddConfirm() {
    if(this.state.newLabel) {
      this.props.confirm(this.state.newLabel);
      this.revert();
    } else {
      this.setState({isErr: true});
    }
  }

  renderAddTodo() {
    const { isErr, newLabel, adding } = this.state;
    return (
      <div className={`todo-label font-20 add ${isErr && 'todo-label_err'}`}>
        {adding ? (
          <AddInput value={newLabel}
                    onInput={e => this.setState({newLabel: e.target.value})}
                    onConfirm={() => this.onAddConfirm()}
                    onCancel={() => this.revert()}
          />
        ) : (
          <AddBtn onAdd={() => this.setState(prevState => ({
                    adding: !prevState.adding
                  }))}
                  isFull={this.props.todos.length > 4}
          />
        )}
      </div>
    );
  }

  render() {
    const { loading, todos, checkTodo, deleteTodo } = this.props;
    return (
      loading ? (
        <Loading />
      ) : (
        <div className="todolist">
          {todos.map(todo => (
            <Todo key={todo.id} {...todo}
                  onCheck={() => checkTodo(todo.id)}
                  onDelete={() => deleteTodo(todo.id)}
            />
          ))}
          {this.renderAddTodo()}
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
  checkTodo: id => dispatch(checkTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  fetchTodos: () => dispatch(fetchTodos()),
  confirm: label => dispatch(addTodo(label))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);