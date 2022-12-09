import React from 'react'
import classes from './VideoItem.module.scss'
import PropTypes from 'prop-types';

const VideoItem = ({el}) => {
    return (
        <li className={classes['video-item']}>
            <h2>{el.title}</h2>
            <h3>{el.date}</h3>
            <p>{el.venue}</p>
                <iframe className={classes.iframe} 
                src={el.url} 
                // frameBorder="0"
                width="789"
                height="444"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                >    
                </iframe>
            <hr/>  
        </li>
    )
}

VideoItem.propTypes = {
    el: PropTypes.object
  };

export default VideoItem

