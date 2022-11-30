
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

//TODO: Add your firebase config in here
export const firebaseConfig = {

};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}