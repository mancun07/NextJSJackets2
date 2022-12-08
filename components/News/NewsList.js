import React, { Fragment } from 'react'
import classes from './NewsList.module.scss'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types';

const NewsList = (props) => {
    return (
        <Fragment>
        <div className={classes.news}>
           {props.news.map(el => {
               return <NewsItem key={el.id} el={el}/>
           })}            
        </div>
        {/* <div>
            <a className={classes.pageLink} href={'/news'}>1</a>
            <a className={classes.pageLink} href={'/news?page=1'}>2</a>
            <a className={classes.pageLink} href={'/news?page=2'}>3</a>
        </div> */}
        </Fragment>
    )
}

NewsList.propTypes = {
    news: PropTypes.array
  };

export default NewsList
