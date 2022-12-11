import React, {Fragment} from 'react'
import { v4 } from "uuid"
import AudioPlayer from '../../components/Audio/AudioPlayer'
import Head from 'next/head'

const DummyAudios = [
    {
        id: v4(), src: '/Move.jpg', mp3:'./Move.mp3', title: 'Move (Spring Drive)'
    },
    {
        id: v4(), src: '/Right.jpg', mp3:'./Right.mp3', title: 'Right (Spring Drive)'
    },
    {
        id: v4(), src: '/Annie.jpg', mp3:'./Annie.mp3', title: 'Annie (Spring Drive)'
    },
    {
        id: v4(), src: '/It_was_you.jpg', mp3:'./It_was_you.mp3', title: 'It was you (Spring Drive)'
    },
    {
        id: v4(), src: '/Slave.jpg', mp3:'./Slave.mp3', title: 'Slave (Spring Drive)'
    },

]

const AudioPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Аудио записи / Группа Spring Drive</title>
                <meta name="description" content="Audio Page" />
            </Head>
            <div className="container">
                <AudioPlayer audios={DummyAudios}/> 
            </div>
        </Fragment>
    )
}

export default AudioPage
