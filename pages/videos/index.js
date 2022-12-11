import React, {Fragment} from 'react'
import VideoList from '../../components/Videos/VideoList'
import { v4 } from "uuid";
import Head from 'next/head'

const bandVideos = [

  {
    id: v4(),
    url:
      "https://www.youtube.com/embed/0Wyx98yoe6c",
    title: "Wake Up",
    date: "01/08/2022",
    venue: "Fontanka Studio",
  },
    {
      id: v4(),
      url:
        "https://www.youtube.com/embed/3IjclzwYGyg",
      title: "Uuu (It looks like a flame)",
      date: "11/09/2022",
      venue: "Smolla Hall",
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
            <title>Клипы / Группа Spring Drive</title>
            <meta name="description" content="Videos of the band Spring Drive" />
        </Head>
        <div className="container">
            <VideoList videos={bandVideos}/>
        </div>
      </Fragment>
    )
}

export default VideosPage
