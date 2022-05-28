import connectDb from "../getConnected.js"

async function addQuote(req, res) {
    if (!req.body || !req.body.quote || !req.body.author) {
        res.status(401).send("Invalid request")
        return
    }
    const db = connectDb()
    const newQuote = {
        quote: req.body.quote,
        author: req.body.author
    }
    try {
        const quote = await db.collection("quotes").add(newQuote)
        res.status(200).send("New quote created 😀" + quote.id)
        
    } catch {
        res.status(500).send(err)
    }
}

export default addQuote