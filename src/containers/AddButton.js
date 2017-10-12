import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adding: false
    }
  }

  render() {
    return (
      <div>
        Add a New Todo
      </div>
    )
  }
}

export default AddButton;