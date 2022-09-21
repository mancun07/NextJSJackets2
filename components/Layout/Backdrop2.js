import React from 'react';
import classes from './Backdrop2.module.scss'

const Backdrop2 = (props) => {
  return (
    <div className={classes.backdrop}>
        {props.children}
    </div>
  ) 
}

export default Backdrop2;
