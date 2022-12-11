import React, {Fragment, useState, useRef, useEffect} from 'react'
import Backdrop from '../Layout/Backdrop';
import classes from './PhotosList.module.scss'
import {motion} from 'framer-motion'
import PropTypes from 'prop-types';
import Image from 'next/image'


const PhotosList = (props) => {

       const [overlayOpen, setOverlayOpen] = useState(false)
       const [imageSrc, setImageSrc] = useState('')

       const showOverlay = (id) => {      
            let imageEl = props.photos.find(el => el.id === id)
            let imgSrc = imageEl.src
            setImageSrc(imgSrc)
            setOverlayOpen(true)  
       }

       const closeOverlay = () => {
            setImageSrc('')
            setOverlayOpen(false)  
       }

    return (
        <Fragment>
        <motion.div className={classes['photos-list']}    
                initial={{x: '-100vw'}}
                animate={{x: 0}}
                transition={{duration: 1, type: 'spring'}}>
            {props.photos.map(el => {
                return <motion.div                 
                key={el.id} onClick={() => showOverlay(el.id)} 
                whileHover={{
                    scale: 1.1,
                    rotateZ: 5,
                    // boxShadow: "0px 0px 8px rgb(255,255,255)"  
                }}
                >
                <Image
                src={el.src} 
                alt={el.title}
                width="350" height="300"
                priority={true}
                aria-hidden="true"
                />
                </motion.div>
            })}
        </motion.div>
        {overlayOpen && ( 
            <Fragment>
                <Backdrop>
                    <span className={classes.close} onClick={closeOverlay}>X</span>
                </Backdrop>
            <div className={classes.modal}>
                <Image src={imageSrc} alt={'band members'} width="200" height="200" aria-hidden="true"
                    layout="responsive"
                    priority={true}
                    />
            </div>
            </Fragment> )
            }
        </Fragment>
    )
}

PhotosList.propTypes = {
    photos: PropTypes.array
  };

export default PhotosList
