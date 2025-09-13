import React from 'react'

function CartItem({item,setCart}) {

    const {image,title,cost,id} = item;

    const remove = () => {
        setCart(prev => {
            return prev.filter(i => i.id !== id)
        })
    }

  return (
    <div className='cartItem'>
        <img src={image} alt="" />
        <div className='cartItemInfo'>
            <h2>{title}</h2> 
            <span>{cost}</span>
        </div>
        <button onClick={remove} style={{position: 'absolute', right: 30}}>❌</button>
    </div>
  )
}

export default CartItem