import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from '../components/Todo';
import Loading from '../components/Loading';
import AddBtn from '../components/AddBtn';
import AddInput from '../components/AddInput';
import Pop from '../components/Pop';
import { checkTodo, deleteTodo, fetchTodos, addTodo, resetErr } from '../store/actions';
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
      adding ? (
        <AddInput value={newLabel}
                  onInput={e => this.setState({newLabel: e.target.value})}
                  onConfirm={() => this.onAddConfirm()}
                  onCancel={() => this.revert()}
                  isErr={isErr}
        />
      ) : (
        <AddBtn onAdd={() => this.setState(prevState => ({
                  adding: !prevState.adding
                }))}
                isFull={this.props.todos.length > 4}
        />
      )
    );
  }

  render() {
    const { loading, todos, checkTodo, deleteTodo, errorMsg, resetErr } = this.props;
    return (
      <div>
        {loading ? (
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
        )}
        {errorMsg && <Pop msg={errorMsg} onClose={() => resetErr()} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({ 
  todos: getSequencedTodos(state),
  loading: state.todos.loading,
  errorMsg: state.errorMsg
});

const mapDispatchToProps = dispatch => ({
  checkTodo: id => dispatch(checkTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  fetchTodos: () => dispatch(fetchTodos()),
  confirm: label => dispatch(addTodo(label)),
  resetErr: () => dispatch(resetErr())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);