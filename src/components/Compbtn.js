
import { Component } from 'react';
import "../App.css"

class Compbtn extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Mounted")
  }
  render() {
    return (
      <button className='custom-button' onClick={this.props.buttonClick}>hi</button>
    );
  }
}

export default Compbtn;
