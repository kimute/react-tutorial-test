import React, { Component, Fragment } from "react";
/*Fragment:React에서 컴포넌트가 여러 엘리먼트를 반환하는 것은 흔한 패턴 Fragments는 DOM에 별도의 노드를 추가하지 않고 여러 자식을 그룹화가능*/
//各INFOを管理する

class InfoManage extends Component {
  state = {
    editing: false,
    name: "",
    age: "",
  };

  handleToggleEdit = () => {
    //true ->false
    //onUpdate
    const { info, onUpdate } = this.props;
    if (this.state.editing) {
      onUpdate(info.id, { name: this.state.name, age: this.state.age });
    } else {
      this.setState({
        name: info.name,
        age: info.age,
      });
    }
    this.setState({
      editing: !this.state.editing,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  shouldComponentUpdate(nextProps, nextState) {
    //修正ではない infoが同じだったら rendering
    if (
      !this.state.editing &&
      !nextState.editing &&
      nextProps === this.props.info
    ) {
      return false;
    }

    return true;
  }
  render() {
    const { name, age } = this.props.info;
    const { editing } = this.state;

    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px",
    };

    return (
      <Fragment>
        <div style={style}>
          {editing ? (
            <Fragment>
              <div>
                <input
                  onChange={this.handleChange}
                  name="name"
                  value={this.state.name}
                />
              </div>
              <div>
                <input
                  onChange={this.handleChange}
                  name="age"
                  value={this.state.age}
                />
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div>
                <b>{name}</b>
              </div>
              <div>{age}</div>
            </Fragment>
          )}
          <button onClick={this.handleToggleEdit}>
            {editing ? "反映" : "修正"}
          </button>
          <button onClick={this.handleRemove}>削除</button>
        </div>
      </Fragment>
    );
  }
}

export default InfoManage;
