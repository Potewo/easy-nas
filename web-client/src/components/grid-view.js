import React from "react"
import axios from "axios"
import GridItem from "../components/grid-item"
import * as Styles from "../components/grid-view.module.css"

class GridView extends React.Component {
  state = {
    files: []
  }

  componentDidMount() {
    axios.defaults.baseURL = 'http://localhost:8000';
    axios.get('http://localhost:1234/api')
      .then(res => {
        const files = res.data;
        console.log(files);
        this.setState({files});
      })
  }

  render() {
    return (
      <div className={Styles.gridContainer}>
        { this.state.files.map((file) => {
          return <GridItem name={file.name} isDir={file.isDir} key={file.name}/>
        })
        }
      </div>
    );
  }
}

export default GridView;
