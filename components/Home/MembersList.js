import React from 'react'
import MemberItem from './MemberItem'
import classes from './MembersList.module.scss'


const MembersList = (props) => {

 
    return (
        <div className={`${classes[`members-list`]} container`}>
            <h2>Участники группы</h2>
            {props.members.map(el => {
                return <MemberItem key={el.id} el={el}/>
            })}
        </div>
    )
}

export default MembersList
