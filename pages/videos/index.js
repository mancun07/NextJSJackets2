import React, {Fragment} from 'react'
import VideoList from '../../components/Videos/VideoList'
import { v4 } from "uuid";
import Head from 'next/head'

const DummyVideos = [
    {
      id: v4(),
      url:
        "https://youtu.be/0Wyx98yoe6c?enablejsapi=1&origin=http://localhost:3000",
      title: "Wake Up",
      date: "15/07/2022",
      venue: "Spring Drive - Wake up (Official music video)",
    },
    {
        id: v4(),
        url:
          "https://www.youtube.com/embed/ACYTaBexgdw?enablejsapi=1&origin=http://localhost:3000",
        title: "Era of Machines",
        date: "04/02/2018",
        venue: "Emergenza, Санкт-Петербург, 2-й этап в Opera Concert Hall",
      },
      {
        id: v4(),
        url:
          "https://www.youtube.com/embed/wIMaLmlnT_0?enablejsapi=1&origin=http://localhost:3000",
        title: "Annie",
        date: "04/02/2018",
        venue: "Emergenza, Санкт-Петербург, 2-й этап в Opera Concert Hall",
      },
      {
        id: v4(),
        url:
          "https://www.youtube.com/embed/gXbjeXW-BFU?enablejsapi=1&origin=http://localhost:3000",
        title: "Slave",
        date: "04/02/2018",
        venue: "Emergenza, Санкт-Петербург, 2-й этап в Opera Concert Hall",
      },
      {
        id: v4(),
        url:
          "https://www.youtube.com/embed/HC3o7_FMA0Y?enablejsapi=1&origin=http://localhost:3000",
        title: "Better way",
        date: "04/02/2018",
        venue: "Emergenza, Санкт-Петербург, 2-й этап в Opera Concert Hall",
      },
]

const VideosPage = () => {
    return (
      <Fragment>
        <Head>
            <title>Video Page</title>
            <meta name="description" content="Video Page" />
        </Head>
        <div className="container">
            <VideoList videos={DummyVideos}/>
        </div>
      </Fragment>
    )
}

export default VideosPage
