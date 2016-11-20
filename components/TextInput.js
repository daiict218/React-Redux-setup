import React from 'react';

class TextInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <div>
        <input
          onChange={this.onInputChange.bind(this)}
          value={this.state.value}
          placeholder={'Enter your todo'}
        />
        <button onClick={this.onSubmit.bind(this)}>{'Submit'}</button>
      </div>
    );
  }

  onSubmit() {

  }

  onInputChange(event) {
    this.setState({
      value: event.target.value
    });
  }

}

export default TextInput;