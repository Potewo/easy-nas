import React from "react"
import * as Styles from "../components/grid-item.module.css"

class GridItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`${Styles.gridItem} ${this.props.isDir ? Styles.dir : ""}`}>
      { this.props.name }
      </div>
    );
  }
}

export default GridItem;
