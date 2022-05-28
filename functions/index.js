import express from "express";
import functions from "firebase-functions";
import cors from "cors";

import addQuote from "./components/addAQuote.js";
import getAllQuotes from "./components/getAQuote.js";

const app = express();
app.use(cors());
app.use(express.json());


//Routes
app.get("/quotes", getAllQuotes);
app.post("/addquote", addQuote);




export const api = functions.https.onRequest(app);
