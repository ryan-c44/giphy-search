import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import '../styles.scss';

const SearchBar = props =>
    <div className="searchBar">
        <input type='text' placeholder='Search for gifs here' onKeyDown={props.searchGif} />
    </div>


export default SearchBar;