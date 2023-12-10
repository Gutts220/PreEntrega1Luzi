import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'
import {doc, getDoc} from 'firebase/firestore'
import { dataBase } from '../firebase/config';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
  const id = useParams().id

  useEffect(() => {

    const docRef = doc(dataBase, "productos", id);
    console.log(docRef)
    getDoc(docRef)
      .then((resp)=> {
        // console.log(resp.id);
        setProduct(
          {...resp.data(), id: resp.id}
        );

      })
    

  },[id])

  
  

  return (
    <>  
      {product &&<ItemDetail
         product={product}
      />}
    </>
    
    
  )
}

export default ItemDetailContainer