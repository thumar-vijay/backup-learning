import React, { useEffect, useRef } from 'react'

function PayPal() {

    const paypal = useRef()
    
    useEffect(()=>{
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.createOrder.create({
                    intent: 'CAPTURE',
                    purchase_units: [
                        {
                            description: 'my own hand-made table',
                            amount: {
                                currency_code: "USD",
                                value: 100.00
                            },
                        },
                    ],
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order)
            },
            onError: async (error)=> {
                console.log(error)
            }
        }).render(paypal.current)
    },[])

    return (
    <div>
        <div ref={paypal}></div>
    </div>
  )
}

export default PayPal

