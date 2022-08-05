import React from 'react'
import Link from 'next/link'
import classes from './NewsDetails.module.scss'
import Image from 'next/image'
import PropTypes from 'prop-types';


const NewsDetails = (props) => {
    return (
        <div className={classes.singleNews}>
            <Link href={'/news'}><a><button className={classes.btn}>Обратно к списку новостей</button></a></Link>
            <div>
                <Image src={props.singleNews.image} alt={props.singleNews.title}
                width="600px" height="300px" priority={true}
                />
            </div>
            <p>{props.singleNews.date}</p>
            <h2>{props.singleNews.title}</h2>
            <p>{props.singleNews.description}</p>
        </div>
    )
}


NewsDetails.propTypes = {
    singleNews: PropTypes.object
  };


export default NewsDetails
