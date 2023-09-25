import React, {Fragment} from 'react'
import PhotosList from '../../components/Photos/PhotosList'
import { v4 } from "uuid";
import Head from 'next/head'


const bandPhotos = [
    {id: v4(), title: 'Band Photo1', src:'/photo1.jpg'},
    {id: v4(), title: 'Band Photo2', src:'/photo2.jpg'},
    {id: v4(), title: 'Band Photo3', src:'/photo3.jpg'},
    {id: v4(), title: 'Band Photo4', src:'/about4.jpg'},
    {id: v4(), title: 'Band Photo5', src:'/about5.jpg'},
    {id: v4(), title: 'Band Photo6', src:'/about6.jpg'},
    {id: v4(), title: 'Band Photo7', src:'/concert1.jpg'},
    {id: v4(), title: 'Band Photo8', src:'/concert2.jpg'},
    {id: v4(), title: 'Band Photo9', src:'/concert3.jpg'}
  ]

const PhotosPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Фото / Группа Spring Drive</title>
                <meta name="description" content="Официальный сайт рок-группы Spring Drive. Новости, концерты, фотоальбом, музыка и многое другое" />
            </Head>
            <div className="container">
                <PhotosList photos={bandPhotos}/>
            </div>
        </Fragment>
    )
}

export default PhotosPage
