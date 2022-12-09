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
            <Link href={'/news'}><a><button className={classes.btn}>Обратно к списку новостей</button></a></Link>
            <div>
                <Image src={props.singleNews.image} alt={props.singleNews.title}
                width="600px" height="300px" priority={true}
                />
            </div>
            <p>{day < 10 ? '0' : ''}{day}{'.'}{month < 10 ? '0' : ''}{month}{'.'}{year}</p>
            <h2>{props.singleNews.title}</h2>
            <p>{props.singleNews.fullcontent}</p>
            <div>{audio && audio}</div>
            <div>{video && video}</div>
        </div>
    )
}


NewsDetails.propTypes = {
    singleNews: PropTypes.object
  };


export default NewsDetails
