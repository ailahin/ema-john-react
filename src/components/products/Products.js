import React from 'react';
import './Products.css'



const Products = (props) => {
    
    
  
   
    return (
        <div className='products-container' >

            <div className='img'> 
                <img src={props.img} alt="" />
            </div>

            <div> 
            <h3> {props.name}</h3> 
            <h5> Item Category: {props.category}</h5>
            <p> Seller:{props.seller}</p>  
            <p> Price: ${props.price} <small > Stock: {props.stock}</small> </p> 

            <button  
            // onClick={()=>props.handleAddToCart(props.product)}
            onClick={()=>props.handleAddToCart(props)}
            
            className='buy-button' > add to cart</button>
          
            </div>  

        
            
        </div>
    );
};

export default Products;