import React, { Component } from "react";
import InfoManage from "./infoManage";

class InfoList extends Component {
  static defaultProps = {
    list: [],
    onRemove: () => console.warn("onRemove not defined"),
    onUpdate: () => console.warn("onUpdate not defined"),
  };

  render() {
    //this.props from infoFrame
    const { data, onRemove, onUpdate } = this.props;
    console.log("data:", data);
    if (!data) return null;
    const list = data.map((info) => (
      <InfoManage
        onRemove={onRemove}
        onUpdate={onUpdate}
        info={info}
        key={info.id}
      />
    ));
    return <div>{list}</div>;
  }
}

export default InfoList;
