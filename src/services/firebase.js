// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN18JGCC7aTyobo-ykK9etGDagujb-z9k",
  authDomain: "tpfinalreactnieto.firebaseapp.com",
  projectId: "tpfinalreactnieto",
  storageBucket: "tpfinalreactnieto.appspot.com",
  messagingSenderId: "970462982421",
  appId: "1:970462982421:web:fde9bd0fc9be3dc630791c"
};


const FirebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(FirebaseApp)

export async function getSalsas(){

    const collectionRef = collection(database, "salsasdelproyecto")
    let resultado = await getDocs(collectionRef) /* Cuando eso se resuelva, guarda el resultado en la variable. Como si fuese el ".then"*/
    let dataSalsas = resultado.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
    })
    return dataSalsas;

}

export async function getUnaSalsa(id){
    
    const docRef = doc(database, "salsasdelproyecto", id)
    const docResultado = await getDoc(docRef)
    return {id:docResultado.id, ...docResultado.data()};

}

export async function getCategorySalsa(id){

    const collectionRef = collection(database, "salsasdelproyecto")
    const queryCategoria = query(collectionRef, where("categoria", "==", id))
    let resultado = await getDocs(queryCategoria)
    let dataSalsas = resultado.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
    })
    return dataSalsas;
}

export function crearOrdenCompra(ordenCompra){

    console.log("orden de compra: ", ordenCompra)

}

export default FirebaseApp;