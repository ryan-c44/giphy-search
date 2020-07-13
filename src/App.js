import React from 'react';
import axios from 'axios';

import SearchBar from './Components/Search';
import GifDisplay from './Components/GifDisplay';
import Title from './Components/Title';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    }
  }

  xmlhr = query => {
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=15&api_key=GOA8UpV7n9treflUv6UbEqvBU0qVy7vL`)
      .then(response => {
        this.setState({
          gifs: response.data.data
        });

        console.log(this.state.gifs);
      })
      .catch(error => {
        console.log('Error', error);
      });
  };

  searchGif = (event, query) => {
    query = event.target.value;

    if (event.key === 'Enter') {
      event.preventDefault();

      this.xmlhr(query);
    }
  };

  render() {
    return (
      <div>
        <Title title="GIPHY SEARCH" />
        <SearchBar searchGif={this.searchGif} />
        <GifDisplay gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
