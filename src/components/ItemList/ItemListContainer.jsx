import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

import firestoreDB from '../../database/firestore'
import { getDocs, collection, query, where } from 'firebase/firestore'

import './ItemListContainer.css'

const ItemListContainer = () => {
  const [data, setData] = useState([])
  const categoryId = useParams().categoryId
  
  //ITEMS TRAIDOS DESDE BASE DE DATOS - FIREBASE
  const getProducts = () => {
    return new Promise((resolve) => {

      const productCollection = collection(firestoreDB, 'producto');

      getDocs(productCollection).then(snapshot => {
        const docsData = snapshot.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        });
        resolve(docsData)
      })
    })
  }
      const getItemsFromDBbyCategory = (categoryId) => {
        return new Promise((resolve) =>{
          const productsCollection = collection(firestoreDB, 'producto');
          const queryProducts = query(productsCollection, where('category', '==', categoryId))
          getDocs(queryProducts).then(snapshot => {
            const docsData = snapshot.docs.map(doc => {
              return { ...doc.data(), id: doc.id }
            })
            resolve(docsData);
          })
      })
    }
    
    useEffect(() => {
      if(categoryId){
        getItemsFromDBbyCategory(categoryId).then((resolve) => {
          setData(resolve)
        })
      } else {
        getProducts().then((resolve) => {
          setData(resolve)
        })
      }
    })
    
  return (
    <>
      <div className=" mx-auto d-block homePage">
      <h1 className="text-center text-light m-5">PRODUCTOS DESTACADOS</h1>
      <ItemList data={data} />
    </div>

    </>
  )
}

export default ItemListContainer
