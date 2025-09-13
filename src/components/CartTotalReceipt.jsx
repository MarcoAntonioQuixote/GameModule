import React, { useEffect, useState } from 'react'

function CartTotalReceipt({cart}) {

    const [subTotal,setSubTotal] = useState(0)
    const taxes = .08;

    useEffect(() => {
        let t = 0;
        for (let item of cart) {
            t += item.cost;
        }
        setSubTotal(t)
        
    },[cart])

  return (
    <div>
        <h2>Subtotal: {subTotal}</h2>
        <p>Taxes: {taxes * 100} %</p>
        <hr />
        <h1>Total: {subTotal + (subTotal * taxes)}</h1>
    </div>
  )
}

export default CartTotalReceipt