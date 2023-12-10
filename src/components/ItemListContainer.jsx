import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import {dataBase} from '../firebase/config';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  const [name, setName] = useState("Products")

  const category = useParams().category

  useEffect(() => {

    const prodRef = collection (dataBase, "infusiones");

    getDocs(prodRef)
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
  
  const filteredProducts = products.filter((products)=>products.category === category)
  console.log(filteredProducts)
   

  return (
    <>
      <ItemList productos={filteredProducts} />
    </>
  );
};

export default ItemListContainer;

