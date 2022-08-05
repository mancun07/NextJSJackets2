import React from 'react'
import VideoItem from './VideoItem'
import classes from './VideoList.module.scss'
import PropTypes from 'prop-types';

const VideoList = (props) => {
    return (
        <div className={classes['video-list']}>
            <h2>Видео с концертов</h2>
            <hr />
            <ul>
                {props.videos.map(el => {
                    return <VideoItem key={el.id} el={el}/>
                })}
            </ul>
        </div>
    )
}

VideoList.propTypes = {
    videos: PropTypes.array
  };

export default VideoList
