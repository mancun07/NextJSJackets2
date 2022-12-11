import React from 'react'
import Link from 'next/link'
import classes from './NewsDetails.module.scss'
import Image from 'next/image'
import PropTypes from 'prop-types';


const NewsDetails = (props) => {


    const { date } = props.singleNews;
    const modifiedDate = new Date(date);

    const day = modifiedDate.getDate() + 1;
    const month = modifiedDate.getMonth() + 1;
    const year = modifiedDate.getFullYear();


// добавляем аудио, если требуется
    let audio = null;

    if(props.singleNews.audioisrequired) {
        audio = 
        <figure>
            {/* <figcaption><h2>{props.singleNews.audiotitle}</h2></figcaption> */}
            <audio
        controls>
                <source src={`/${props.singleNews.audiotitle}.mp3`} type="audio/mpeg" />
                <source src={`${props.singleNews.audiotitle}.ogg`} type="audio/ogg" />
                <p>
                    Download <a href={`/${props.singleNews.audiotitle}.mp3`}>MP3</a> or
                    <a href={`/${props.singleNews.audiotitle}.mp3`}>OGG</a> audio.
                </p>
            </audio>
        </figure>
        
    }

// добавляем видео, если требуется

let video = null;

    if(props.singleNews.videoisrequired) {
        video = 
        <iframe className={classes.iframe} 
                src={props.singleNews.videolink} 
                width="789"
                height="444"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                >    
        </iframe>
        
    }


    return (
        <div className={classes.singleNews}>
            <span className={classes.btn}>
                <Link href={'/news'}>Обратно к списку новостей</Link>
            </span>
            <div className={classes['image-wrapper']}>
                <Image src={props.singleNews.image} alt={props.singleNews.title}
                width="600px" height="300px" 
                />
            </div>
            <p>{day < 10 ? '0' : ''}{day}{'.'}{month < 10 ? '0' : ''}{month}{'.'}{year}</p>
            <h2>{props.singleNews.title}</h2>
            <p>{props.singleNews.fullcontent}</p>
            <div>{audio && audio}</div>
            <div className={classes.video}>{video && video}</div>
        </div>
    )
}


NewsDetails.propTypes = {
    singleNews: PropTypes.object
  };


export default NewsDetails
