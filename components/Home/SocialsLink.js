import React, {Fragment} from 'react'
import classes from './SocialsLink.module.scss'
import Link from 'next/link'

const SocialsLink = ({el}) => {
    return (
        <li className={classes.socialsLink}>
            <hr/>
            <div className={classes.socialsLinkItem}>
                <span className={classes.icon} style={{background: el.color}}>
                <Link href={el.href}>
                    <a target="blank">{el.pic}</a>
                </Link>
                </span>
                <span>{el.title}</span>
            </div>
        </li>
    )
}

export default SocialsLink
