import React, { Component } from "react";

class InputForm extends Component {
  state = {
    name: "",
    age: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    // ページのreloadを防ぐ
    e.preventDefault();
    // status value => onCreate => parent
    this.props.onCreate(this.state);
    // 初期化
    this.setState({
      name: "",
      age: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="名前"
          onChange={this.handleChange}
          value={this.state.name}
        />
        {this.state.name}
        <br />
        <input
          name="age"
          placeholder="何でも"
          onChange={this.handleChange}
          value={this.state.age}
        />
        {this.state.age}
        <br />
        <button type="submit">登録</button>
      </form>
    );
  }
}

export default InputForm;
