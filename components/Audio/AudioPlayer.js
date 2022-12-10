import React, {Fragment, useRef, useState } from 'react'
import classes from './AudioPlayer.module.scss'
import Image from 'next/image'
import PropTypes from 'prop-types';



const AudioPlayer = (props) => {
    const [songIndex, setSongIndex] = useState(0)
    const [playState, setPlayState] = useState(false)
    const audioRef = useRef('')

    const songImage = props.audios[songIndex].src;
    const songRecord = props.audios[songIndex].mp3;
    const songName = props.audios[songIndex].title;

    const playHandler = () => {
        audioRef.current.play();
        setPlayState(true)
    } 

    const pauseHandler = () => {
        audioRef.current.pause();
        setPlayState(false)
    }

    const handleNextSong = () => {
        if (songIndex < (props.audios.length - 1)) {
        setSongIndex((prevState) => {
            return prevState + 1
        });
        } else {
        setSongIndex(0);
        }
        setTimeout(() => {
            audioRef.current.play();   
        }, 100)
        setPlayState(true)
    }

    const handlePrevSong = () => {
        if (songIndex === 0) {
            setSongIndex(props.audios.length - 1)
        } else {
            setSongIndex((prevState) => {
                return prevState - 1
            })
        }
        setTimeout(() => {
            audioRef.current.play();   
        }, 100)
        setPlayState(true)
    }


    return (
        <div className={classes.playerWrapper}>
            <div className={classes.navigation}>
                <div className={classes.navigation__left}></div>
                <div className={classes.navigation__right}>
                    <span onClick={handlePrevSong}>Prev</span>
                    {!playState && <span onClick={playHandler}>Play</span>}
                    {playState && <span onClick={pauseHandler}>Pause</span>}
                    <span onClick={handleNextSong}>Next</span>
                </div>

                <div className={`${classes.disk} ${playState ? classes.diskIsActive : ''}`}>
                    <Image 
                        src={songImage} 
                        alt="song poster" 
                        width="75" 
                        height="75"
                        layout="responsive"
                        priority={true}
                        />
                </div>

                <div className={`${classes.show} ${playState && classes.isActive}`}>{songName}</div>
            </div>
            <audio className={classes.audio} ref={audioRef} src={songRecord} controls>
            </audio>
        </div>
    )
}

AudioPlayer.propTypes = {
    audios: PropTypes.array
  };


export default AudioPlayer
