import React, {useRef, useState} from 'react'
import classes from './AudioPlayer2.module.scss'

const AudioPlayer2 = (props) => {

const [songIndex, setSongIndex] = useState(0);
const [playState, setPlayState] = useState(false);
const audio = useRef('');


const onPrevSongHandler = () => {

    if(songIndex > 0) {
        setSongIndex(prevState => prevState - 1)
    } else {
        setSongIndex(props.audios.length - 1)
    }

    playSong();
}

const onNextSongHandler = () => {
    if(songIndex < props.audios.length - 1) {
        setSongIndex(prevState => prevState + 1)
    } else {
        setSongIndex(0)
    }

    const timer = setTimeout(() => {
        audio.current.play();
    }, 100)

    return () => clearTimeout(timer);
}

const playSong = () => {
    setPlayState(true);

    const timer = setTimeout(() => {
        audio.current.play();
    }, 100)
    
    return () => clearTimeout(timer);
}

const pauseSong = () => {
    setPlayState(false);
    audio.current.pause();
}

const onPlayHandler = () => {
    const isPlaying = playState;

    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

  return (
    <div className={`${classes[`music-container`]} ${playState === true ? classes.play : ''}`}>
        <div className={classes[`music-info`]}>
            <div className={classes[`music-title`]}>{props.audios[songIndex].title}</div>
            <div className={classes[`progress-container`]}>
                <div className={classes[`progress`]}></div>
            </div>
        </div>

        <div className={classes[`image-container`]}>
            <img src={props.audios[songIndex].src} alt={props.audios[songIndex].title}/>
        </div>

        <div className={classes.navigation}>
            <span onClick={onPrevSongHandler}>Prev</span>
            <span onClick={onPlayHandler}>{playState === false ? 'PLAY' : 'PAUSE'}</span>
            <span onClick={onNextSongHandler}>Next</span>
        </div>

        <audio ref={audio} src={props.audios[songIndex].mp3}></audio>
    </div>
  )
}

export default AudioPlayer2