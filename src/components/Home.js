import React from "react";
import Switch from "react-switch";
import { Link } from 'react-router-dom'
import moment from "moment";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
      checked: false,
      date: moment().format("DD MMM YYYY")
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    const { date, time } = this.state;

    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>Time: {time.toLocaleTimeString()}</h2>
        {this.state.checked ? <h2>Date: {date}</h2> : null}
        <label htmlFor="normal-switch">
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            className="react-switch"
            id="normal-switch"
          />
        </label>
        <p><span><Link to='/giphy'>Search giphy...</Link></span></p>
      </div>
    );
  }
}

export default Home
