import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../products/Products';
import Cart from '../Cart/Cart';



const Shop = () => {
    const [ products, setProducts]= useState([]);
    const [cart, setCart]= useState([]);

    useEffect(()=>{
        fetch('./products.JSON')
        .then(response=>response.json())
        .then(data=>setProducts(data));

    }, [])

    const handleAddToCart= (props)=>{
        //console.log(props.name);
        

        const newCart= [...cart, props]
        setCart(newCart);

    }
    return (
        <div className='main'>      
             <div className='products'>
                {
                    products.map (product=> <Products 
                        key={product.key}
                    img={product.img} 
                    name={product.name} 
                    seller={product.seller}
                    price={product.price} 
                    stock={product.stock}
                    category={product.category}
                    handleAddToCart={handleAddToCart}
                    
                    >

                    </Products>)
                }

    
                 
            </div>

            <div className='total-price'>

                <Cart cart={cart}>  </Cart>

            </div>
        </div>
    );
};




export default Shop;