import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {dataBase} from '../firebase/config';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  const category = useParams().category
 
  
  useEffect(() => {

    const prodRef = collection (dataBase, "productos");
    console.log(prodRef)
    
    const q = category ? query(prodRef, where('category', "==", category)) : prodRef;
    console.log(q)
    
    

    getDocs(q)
      .then((resp)=> {
        console.log(resp.docs)
        console.log(resp.docs[0].id);
        console.log(resp.docs[0].data());
        setProducts(
          resp.docs.map((doc)=>{
            return{ ...doc.data() , id: doc.id  };
          })
        )
      })
      .catch((err) => { console.error('Error fetching data:', err) })
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

