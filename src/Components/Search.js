import React from 'react';
import '../styles.scss';

const SearchBar = props =>
    <div className="searchBar">
        <input type='text' placeholder='Search...' onKeyDown={props.searchGif} />
    </div>


export default SearchBar;