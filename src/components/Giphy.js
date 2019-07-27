import React from 'react'
import { Link } from 'react-router-dom'
import GiphyList from './GiphyList';

class Giphy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: "dc6zaTOxFJmzC", //It should be move in to config file.
      limit: 5,
      filterText: "",
      gifs: []
    }

    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(filterText) {
    const { apiKey, limit } = this.state;
    this.setState({filterText});

    let url = `http://api.giphy.com/v1/gifs/search?q=${filterText}&api_key=${apiKey}&limit=${limit}`;
    fetch(url)
    .then(response => response.json())
    .then((gifs) => {
      this.setState({
        gifs: gifs.data
      });
    });
  };

  render() {
    const { gifs, filterText } = this.state;

    return(
      <div>
        <div className="sixteen wide column">
          <div className="ui segment secondary">
            <div className="ui huge fluid input">
              <input
                type="text"
                placeholder="Search all the GIFs..."
                value={filterText}
                onChange={(ev) => this.handleTermChange(ev.target.value)}
              />
            </div>
          </div>
        </div>
        {gifs.length > 0 ? <GiphyList gifs={gifs}/> : <h2>No gif available.</h2>}
        <p><span><Link to='/'>Home</Link></span></p>
      </div>
    );
  }
}


export default Giphy;
