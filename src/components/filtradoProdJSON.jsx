import React from 'react'

const filtradoProdJSON = () => {
    const getProducts = async() =>{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data 
      }
      
      const [products, setProducts] = useState([]);
      useEffect(() => {
        getProducts().then((product) => setProducts(product))
      }, [])
    
    
      return (
        <>
          {
            products.map((prod)=>{
              return(<Item
                key = {prod.id}
                price={prod.price}
                title={prod.title}
                image={prod.image}
              />)
            })
          }
        </>
        
      )
    }

export default filtradoProdJSON