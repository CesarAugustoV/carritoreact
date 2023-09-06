import {
    async
} from '@firebase/util';
import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    query,
    where,
    updateDoc,
    deleteDoc,
    increment,
    writeBatch
} from 'firebase/firestore';
import {
    db
} from "./config";

const productosRef = collection(db, "Items");
const filtrosRef = collection(db, "Filtros");




export const productsPromise = async (category) => {

    const q = category ?
        query(productosRef, where('category', '==', category)) :
        productosRef;


    let productos = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        productos = [...productos, {
            ...doc.data(),
            id: doc.id
        }]
    })
    return productos;
};

export const filtrosPromesa = async () => {

    const q = filtrosRef;


    let filtros = [];
    const querySnapshot = await getDocs(q);


    querySnapshot.forEach((doc) => {
        filtros = [...filtros, {
            ...doc.data(),
            id: doc.id
        }]
    })

    return filtros;
};



export const productsPromiseId = async (id) => {

    const document = doc(db, "Items", id);

    const docSnap = await getDoc(document);


    if (docSnap.exists()) return {
        id: docSnap.id,
        ...docSnap.data()
    };

    return null;

};


//cargar data de PRODUCTOS a la bd
export const cargarData = async () => {
    FILTROS.forEach(async (filtro) => {
        await addDoc(filtrosRef, filtro)
    })
}


// actualizar bd
export const updateProducto = async (id, item) => {
    const newBook = await updateDoc(doc(db, "items", id), item);
    return;
}

// eliminar db
export const deleteBook = async (id) => {
    return await deleteDoc(doc(db, "items", id))
}

// operaciones en lote
export const updateManyProductos = async (items) => {
    const batch = writeBatch(db);

    items.forEach(({
        id,
        qty
    }) => {



        batch.update(doc(db, "Items", id), {
            stock: increment(-qty)
        })
    })

    batch.commit();
}