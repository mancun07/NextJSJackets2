import React from 'react'
import classes from './MemberItem.module.scss'
import Image from 'next/image'
import {Slide} from 'react-awesome-reveal';

const MemberItem = ({el}) => {
    // style={{flexDirection: el.direction}}
    return (
        <Slide cascade={true} triggerOnce={true}>
        <div className={classes[`member-item`]}>
            <span className={classes[`member-item__name`]}>
                {el.title}
            </span>
            <span className={classes[`member-item__photo`]}>
                <Image src={el.src} alt={el.title} width="250px" height="250px" priority={true}/>
            </span>
        </div>
        </Slide>
    )
}

export default MemberItem
