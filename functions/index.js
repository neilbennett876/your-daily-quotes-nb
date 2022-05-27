import express from 'express';
import functions from "firebase-functions"
import connectDb from './getConnected.js';
import cors from 'cors';

const app = express()
app.use(cors());
app.use(express.json())


const quote = {
    author: "John Wayne",
    quote: "Not all those who wonder are lost"
}

//Routes
app.get("/quotes", getAllQuotes)


async function getAllQuotes (req, res) {
const db = connectDb()
try {
    const snapshot = await db.collection("quotes").get()
    const quotesArray = snapshot.docs.map(doc => {
        let quote = doc.data()
        quote.id = doc.id
        return quote
    })
    res.send(quotesArray)
    
} catch (error) {
    res.status(500).send(err)
}

}

//Adding a quote hard coded
// quoteConnect
// .add(quote)
// .then(file => console.log("Quote added!! 😀", file.id))
// .catch(console.error)

// //Getting ALL quotes hard coded
// quoteConnect.get()
// .then(file => console.log(file.data()))
// .catch(console.error)


export const api = functions.https.onRequest(app)
