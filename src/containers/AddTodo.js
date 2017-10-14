import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddInput from '../components/AddInput';
import AddBtn from '../components/AddBtn';
import { addTodo } from '../store/actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adding: false,
      newLabel: '',
      isErr: false
    }
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

  render() {
    return (
      <div className={`todo-label font-20 add ${this.state.isErr && 'todo-label_err'}`}>
        {this.state.adding ? (
          <AddInput value={this.state.newLabel}
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
}

const mapStateToProps = state => ({
  todos: Object.values(state.todos.items)
});

const mapDispatchToProps = dispatch => ({
  confirm: label => dispatch(addTodo(label))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);