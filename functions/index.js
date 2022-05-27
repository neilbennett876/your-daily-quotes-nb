import express from 'express';
import functions from "firebase-functions"
import quoteConnect  from "./getConnected.js";
import cors from 'cors';

const app = express()
app.use(cors());
app.use(express.json())

const q =  quoteConnect()

const quote = {
    author: "John Wayne",
    quote: "Not all those who wonder are lost"
}

//Routes
app.get("/quotes", getAllQuotes)


function getAllQuotes (req, res) {
    q.collection("quotes").get()
    .then(snapshot => {
        constAllArrayOfQuotes = snapshot.docs.map(doc => {
            let quote = doc.data()
            quote.id = doc.id
            return quote
        })
        res.send(constAllArrayOfQuotes)
    })
    .catch(err => {
        res.status(500).send(err)
    })

}

//Adding a quote hard coded
quoteConnect
.add(quote)
.then(file => console.log("Quote added!! 😀", file.id))
.catch(console.error)

//Getting ALL quotes hard coded
quoteConnect.get()
.then(file => console.log(file.data()))
.catch(console.error)


export const api = functions.https.onRequest(app)
