import React, {useEffect, Fragment} from 'react'
import NewsList from '../components/News/NewsList'
import {MongoClient} from 'mongodb'
import Head from 'next/head'


const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.op8yb.mongodb.net/JACKETS?retryWrites=true&w=majority`


const NewsPage = (props) => {

  

    useEffect(() => {
        document.body.classList.add('mainImage');

        return () => {
        document.body.classList.remove('mainImage');
        }
    }, [])

 
    return (
       <Fragment> 
            <Head>
                <title>Новости / Группа Spring Drive</title>
                <meta name="description" content="Официальный сайт рок-группы Spring Drive. Новости, концерты, фотоальбом, музыка и многое другое" />
            </Head>
            <div className="container">
                <NewsList news={props.news}/>
            </div>
        </Fragment>
    )
}


export const getStaticProps = async() => {

    const client = await MongoClient.connect(url);
    const db = client.db();
    const articlesCollection = db.collection('articles');

    const articles = await articlesCollection
    .find()
    .limit(9)
    .sort({date: -1})
    .toArray();

    client.close();

    return {
        props: {
            news: articles.map(item => ({
                id: item._id.toString(),
                image: item.image,
                title: item.title,
                content: item.content,
                fullcontent: item.fullcontent,
                date: Date.parse(item.date)
            }))
        },
        revalidate: 1000
    }


}




export default NewsPage
