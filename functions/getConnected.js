import admin from "firebase-admin"
import serviceAccount from "./credentials.js"

admin.initializeApp({credential: admin.credential.cert(serviceAccount)})

const db = admin.firestore()

export default quoteConnect = db.collection("quotes")
