import React from 'react';
import './Cart.css'

const Cart = (props) => {

    //console.log(props.cart);

    
    const {cart}= props;

    //const total= cart.reduce((previus + props)=> previous+props.price,0)
    let total= 0;
    for (const props of cart){
    total= total+props.price;
    }

    const shipping= 10;
    const tax =((total+shipping)*0.050)
       
    
    const orderTotal= total+shipping+tax;
    const totalMoney= orderTotal;
     
return (

<div>
<h1 className='order-summary'> Order Summary</h1>

<div className='summary-list'> 
<h3> Item Ordered:{props.cart.length}</h3>
<p>Items Total: ${total.toFixed(2)}  </p>
<p>Shipping & Handling: ${shipping.toFixed(2)}  </p>
<p> Tax: ${tax.toFixed(2)} </p>
<h3 className='order-total'> Order Total: {totalMoney.toFixed(2)}</h3>

</div>

<button className='review-btn'> Review Your Order</button>
        </div>
    );
};

export default Cart;