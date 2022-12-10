import { MongoClient, ObjectId } from "mongodb";

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.op8yb.mongodb.net/JACKETS?retryWrites=true&w=majority`

const handler = async (req, res) => {

    //API для удаления новостей (DELETE запрос)
    if(req.method === 'DELETE') {
        const client = await MongoClient.connect(url);
        const db = client.db();
        const articlesCollection = db.collection('articles');

        const deletedArticle = await articlesCollection.deleteOne({_id: ObjectId(req.query.id)});
        res.status(200).json(deletedArticle)

        client.close();
    }

    // API для обновления новостей (PATCH запрос)
    if (req.method === 'PATCH') {
        const client = await MongoClient.connect(url);
        const db = client.db();
        const articlesCollection = db.collection('articles');

        const newObj = req.body;

        const updatedArticle = await articlesCollection.updateOne({_id: ObjectId(req.query.id)}, 
        {$set: newObj})

        res.status(200).json(updatedArticle);
        client.close();
    }
}

export default handler