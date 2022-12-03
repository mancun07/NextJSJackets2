import React, {useEffect, Fragment} from 'react'
import NewsList from '../../components/News/NewsList'
import {MongoClient} from 'mongodb'
import Head from 'next/head'



// const sortArray = (array) => {
//     return array.sort((a,b) => {
//         return a.date > b.date ? -1 : 1
//     })
// }

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.op8yb.mongodb.net/JACKETS?retryWrites=true&w=majority`


const NewsPage = (props) => {

  

    useEffect(() => {
        document.querySelector('body').classList.add('mainImage');

        return () => {
        document.querySelector('body').classList.remove('mainImage');
        }
    }, [])


    // const sortedNews = sortArray(props.news)
    const sortedNews = props.news
 
    return (
       <Fragment> 
            <Head>
                <title>News Page</title>
                <meta name="description" content="News Page" />
            </Head>
            <div className="container">
                <NewsList news={sortedNews}/>
            </div>
        </Fragment>
    )
}


export const getStaticProps = async() => {
    const client = await MongoClient.connect(url);
    const db = client.db();
    const articlesCollection = db.collection('articles');

    const articles = await articlesCollection.find().sort({date: -1}).toArray();
    console.log(articles)

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

// export const getStaticProps = async () => {
//     const client = await MongoClient.connect(url);
//     const db = client.db();
//     const articlesCollection = db.collection('articles')

//     const articles = await articlesCollection.find().toArray();
//     client.close();

//     return {
//         props: {
//             news: articles.map(el => ({
//                 id: el._id.toString(),
//                 image: el.image,
//                 title: el.title,
//                 description: el.content,
//                 date: el.date
//             }))
//         },
//         revalidate: 1000
//     }
// }



export default NewsPage
