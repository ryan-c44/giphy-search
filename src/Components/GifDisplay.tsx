import React from 'react';
import PropTypes from 'prop-types';

import '../styles.scss';

const GifDisplay = props =>
    <div className="image-container">
        <div className='images'>
            {
            props.gifs.map((gif, index) => {
                return <div key={index}><img key={index} src={gif.images.fixed_height.url} className="image-div"/></div>
            })
            }
        </div>
    </div>

export default GifDisplay;