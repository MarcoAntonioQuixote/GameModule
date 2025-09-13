import React from 'react'
import CartItem from '../CartItem'
import CartTotalReceipt from '../CartTotalReceipt'

function CartPage({cart,setCart}) {

    const showCartItems = cart.map(item => <CartItem setCart={setCart} item={item} /> )

  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div className='cartContainer'>
            {showCartItems}
        </div>
        <CartTotalReceipt cart={cart} />
    </div>
  )
}

export default CartPage