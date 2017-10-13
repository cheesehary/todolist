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
      newLabel: ''
    }
  }

  revert() {
    this.setState({
      adding: false,
      newLabel: ''
    });
  }

  onAddConfirm() {
    this.props.confirm(this.state.newLabel);
    this.revert();
  }

  render() {
    return (
      <div>
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
                  isFull={Object.keys(this.props.todos).length > 4}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  confirm: label => dispatch(addTodo(label))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);