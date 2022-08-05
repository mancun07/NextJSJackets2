import React from 'react'
import SocialsLink from './SocialsLink'
import classes from './Description.module.scss'

const Description = (props) => {
    return (
        <section className={`${classes[`about-us`]} container`}>
            <div className={classes[`about-us__desc`]}>
                <p>SPRING DRIVE (Ex Leather Jackets) — музыкальный коллектив из Санкт-Петербурга основаный в 2012 году с целью нести любовь к жизни и свободы посредством экспериментов с такими жанрами музыки, как электроник-рок, психоделический рок, арена-рок, инди-рок, гаражный рок, индастриал-рок, поп-рок.</p>
                <p>Песни группы будут понятны каждому человеку, который любит жизнь и свободу! Группа SPRING DRIVE основана в 2012 году и с тех пор накопила огромный опыт в написании песен и живых выступлений.</p>
            </div>
            <div className={classes[`about-us__socials`]}>
                <h3>мы в соцсетях</h3>
                <ul>
                {props.socials.map(el => {
                    return <SocialsLink key={el.id} el={el}/>
                })}
                </ul>
            </div>
        </section>
    )
}

export default Description
