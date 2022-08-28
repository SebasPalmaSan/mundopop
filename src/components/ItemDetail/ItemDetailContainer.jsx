import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import firestoreDB from '../../database/firestore'
import { getDoc, doc, collection } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [data, setData] = useState([])
    const idUrl  = useParams().id
    
    useEffect(() => {
        const getItem = (id) => {
            return new Promise((resolve) => {
                const productsCollection = collection(firestoreDB, 'producto');
                const docRef = doc(productsCollection, id);
                getDoc(docRef).then(snapshot => {
                    resolve(
                        {...snapshot.data(), id: snapshot.id}
                        )
                });

            })
        
        }
        getItem(idUrl).then(product => {
            setData(product)
        })
    }, [idUrl])

    return(
        <main>
            <ItemDetail data={data} />
        </main>
    )

    }

export default ItemDetailContainer