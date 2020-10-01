import React, { Component, Fragment } from "react";
import InfoInsert from "./infoInsert";
import InfoList from "./infoList";

class InfoFrame extends Component {
  id = 0;
  state = {
    information: [],
    keyword: "",
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  handleCreate = (data) => {
    console.log("infoFrame data:", data);
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data }),
    });
  };

  //削除処理
  //filterを使って削除処理をする
  //選択したid以外をfilterしてarrayに入れる
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter((info) => info.id !== id),
    });
  };

  hanldleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map((info) =>
        id === info.id ? { ...info, ...data } : info
      ),
    });
  };

  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      (info) => info.name.indexOf(keyword) !== -1
    );
    return (
      // InfoInsertのonCreate関数を使って処理
      <Fragment>
        <InfoInsert onCreate={this.handleCreate} />
        {/* result:{JSON.stringify(this.state.information)} */}
        <p>
          <input
            placeholder="Search..."
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <InfoList
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </Fragment>
    );
  }
}

export default InfoFrame;
