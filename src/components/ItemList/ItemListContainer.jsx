import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import DotSpinner from '../DotSpinners/DotSpinners'

import {firestoreDB} from '../../database/firestore'
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
      {data.length === 0 ? 
      <div className="spinner">
       <DotSpinner />
       </div>
       :
       <div className=" mx-auto d-block homePage">
      <h1 className="bg-dark rounded m-2 text-center text-light">PRODUCTOS DESTACADOS</h1>
      <hr />
      <ItemList data={data} />
    </div>
      }
      

    </>
  )
}

export default ItemListContainer
