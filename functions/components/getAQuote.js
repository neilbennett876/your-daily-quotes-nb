import connectDb from "../getConnected.js"

async function getAllQuotes(req, res) {
    const db = connectDb();
    try {
      const snapshot = await db.collection("quotes").get();
      const quotesArray = snapshot.docs.map((doc) => {
        let quote = doc.data();
        quote.id = doc.id;
        return quote;
      });
      res.send(quotesArray);
    } catch (error) {
      res.status(500).send(err);
    }
  }

  export default getAllQuotes