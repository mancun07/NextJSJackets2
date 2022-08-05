import React, {Fragment} from 'react'
import {MongoClient, ObjectId} from 'mongodb'
import NewsDetails from '../../components/News/NewsDetails'
import Head from 'next/head'

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.op8yb.mongodb.net/JACKETS?retryWrites=true&w=majority`

const SingleNewsPage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>Single News Page</title>
                <meta name="description" content="Single News Page" />
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
                description: selectedNews.content,
                date: selectedNews.date,
            }
        }
    }

} 

export default SingleNewsPage
