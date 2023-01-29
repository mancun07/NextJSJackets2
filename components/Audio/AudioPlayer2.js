import React, {useRef, useState} from 'react'
import classes from './AudioPlayer2.module.scss'
import Image from 'next/image'

const AudioPlayer2 = (props) => {

const [songIndex, setSongIndex] = useState(0);
const [playState, setPlayState] = useState(false);
const audio = useRef('');
const progressBar = useRef('');

// Запуск предыдущей песни
const onPrevSongHandler = () => {

    if(songIndex > 0) {
        setSongIndex(prevState => prevState - 1)
    } else {
        setSongIndex(props.audios.length - 1)
    }

    playSong();
}

// Запуск следующей песни
const onNextSongHandler = () => {
    if(songIndex < props.audios.length - 1) {
        setSongIndex(prevState => prevState + 1)
    } else {
        setSongIndex(0)
    }

    playSong();
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
    const timer = setTimeout(() => {
        audio.current.pause();
    }, 100)
    
    return () => clearTimeout(timer);
}

const onPlayHandler = () => {
    const isPlaying = playState;

    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

// update положения кастомного прогресс-бара
const updateProgressBar = (e) => {
    const {duration, currentTime} = e.target;
    const percentage = (currentTime / duration) * 100; 

    progressBar.current.style.width = `${percentage}%`;

}


// update момента песни, после того как двигаем кастомный прогресс-бар
const updateAudioTime = (e) => {

    const width = e.target.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    
    audio.current.currentTime = (clickX / width) * audio.current.duration;
}



  return (
    <div className={`${classes[`music-container`]} ${playState === true ? classes.play : ''}`}>
        <div className={classes[`music-info`]}>
            <div className={classes[`music-title`]}>{props.audios[songIndex].title}</div>
            <div className={classes[`progress-container`]} onClick={updateAudioTime}>
                <div ref={progressBar} className={classes[`progress`]}></div>
            </div>
        </div>

        <div className={classes[`image-container`]}>
            <Image 
                src={props.audios[songIndex].src} 
                alt="song poster" 
                width="90" 
                height="90"
                layout="responsive"
                priority={true}
                />
        </div>

        <div className={classes.navigation}>
            <span onClick={onPrevSongHandler}>Prev</span>
            <span onClick={onPlayHandler}>{playState === false ? 'PLAY' : 'PAUSE'}</span>
            <span onClick={onNextSongHandler}>Next</span>
        </div>

        <audio ref={audio} onTimeUpdate={updateProgressBar} onEnded={onNextSongHandler} src={props.audios[songIndex].mp3}></audio>
    </div>
  )
}

export default AudioPlayer2