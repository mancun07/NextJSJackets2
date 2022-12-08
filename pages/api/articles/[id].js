import { MongoClient, ObjectId } from "mongodb";

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.op8yb.mongodb.net/JACKETS?retryWrites=true&w=majority`

const handler = async (req, res) => {
    if(req.method === 'DELETE') {
        const client = await MongoClient.connect(url);
        const db = client.db();
        const articlesCollection = db.collection('articles');

        const deletedArticle = await articlesCollection.deleteOne({_id: ObjectId(req.query.id)});
        res.status(200).json(deletedArticle)

        client.close();
    }

    if (req.method === 'PATCH') {
        const client = await MongoClient.connect(url);
        const db = client.db();
        const articlesCollection = db.collection('articles2');

        const newObj = {
            title: req.body.title,
            content: req.body.content,
            image: req.body.image,
            date: req.body.date
        }

        const updatedArticle = await articlesCollection.updateOne({_id: ObjectId('6389b78c85599ca493ec3c83')}, 
        {$set: newObj})

        res.status(200).json(updatedArticle);
        client.close();
    }
}

export default handler