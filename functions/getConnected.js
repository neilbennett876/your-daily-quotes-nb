import { initializeApp, getApps, cert } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"
import serviceAccount from "./credentials.js"

export default function connectDb(){

    if (getApps().length === 0) {

        
        initializeApp({
            credential: cert(serviceAccount)})
    }
    return getFirestore()
    
    
}

