import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {dataBase} from '../firebase/config';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  const category = useParams().category
  console.log(category)

  useEffect(() => {

    const prodRef = collection (dataBase, "productos");

    // const q = category ? query(prodRef, where("category", "==", category)) : prodRef;

    const q = query(prodRef, where("category", "==", category));

    getDocs(q)
      .then((resp)=> {
        console.log(resp.docs[0].id);
        console.log(resp.docs[0].data());
        setProducts(
          resp.docs.map((doc)=>{
            return{...doc.data(), id: doc.id}
          })
        )
      })
  }, [category])
  
  // const filteredProducts = products.filter((products)=>products.category === category)
  // console.log(filteredProducts)
   

  return (
    <>
      <ItemList productos={products}/>
    </>
  );
};

export default ItemListContainer;

