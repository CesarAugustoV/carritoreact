import {
    collection,
    addDoc,
    getDoc,
    doc
} from 'firebase/firestore';
import {
    db
} from './config';

const ordersRef = collection(db, 'orders');

export const addOrder = async (order) => {

    const orderDoc = await addDoc(ordersRef, order);

    return orderDoc.id;
}

export const getOrder = async (id) => {

    const document = doc(db, "orders", id);

    const docSnap = await getDoc(document);

    if (docSnap.exists()) return {
        id: docSnap.id,
        ...docSnap.data()
    };

    return null;

}

