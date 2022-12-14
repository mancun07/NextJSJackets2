import React, {Fragment} from 'react'
import {MongoClient, ObjectId} from 'mongodb'
import NewsDetails from '../../components/News/NewsDetails'
import Head from 'next/head'

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.op8yb.mongodb.net/JACKETS?retryWrites=true&w=majority`

const SingleNewsPage = (props) => {

    return (
        <Fragment>
            <Head>
                <title>Новости / Группа Spring Drive</title>
                <meta name="description" content="Официальный сайт рок-группы Spring Drive. Новости, концерты, фотоальбом, музыка и многое другое" />
            </Head>
            <div className="container">
                <NewsDetails singleNews={props.singleNews}/>
            </div>
        </Fragment>
    )
}

export const getStaticPaths = async () => {
  
    const client = await MongoClient.connect(url);
    const db = client.db();
    const articlesCollection = db.collection('articles');

    const articles = await articlesCollection.find({}, {_id: '604e6d23db7eb5a2dd556fc4'}).toArray();
    client.close();

    return {
        fallback: 'blocking',
        paths: articles.map(el => ({
            params: {newsId: el._id.toString()}
        }))
    }

}

export const getStaticProps = async (context) => {


    const newsId = context.params.newsId;

    const client = await MongoClient.connect(url);
    const db = client.db();
    const articlesCollection = db.collection('articles');

    const selectedNews = await articlesCollection.findOne({
        _id: ObjectId(newsId)
    })
    client.close();

    return {
        props: {
            singleNews: {
                id: selectedNews._id.toString(),
                title: selectedNews.title,
                image: selectedNews.image,
                content: selectedNews.content,
                fullcontent: selectedNews.fullcontent,
                audioisrequired: selectedNews.audioisrequired,
                audiotitle: selectedNews.audiotitle,
                videoisrequired: selectedNews.videoisrequired,
                videolink: selectedNews.videolink,
                date: Date.parse(selectedNews.date),
            }
        }
    }

} 

export default SingleNewsPage
