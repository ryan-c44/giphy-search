import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles.scss';

const SearchBar = props =>
    <div className="searchBar">
        <input type='text' placeholder='Search for gifs here' onKeyDown={props.searchGif} />
    </div>


export default SearchBar;