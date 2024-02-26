import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


export default function Cart(props) {
  //const { accessToken } = props;

  let cartData = props.cartItems.itemData

  console.table(cartData)

  console.table(props.cartItems)



    return (<div className="container">
        
       {cartData.map((item, index) => (
        
        <div className="row mt-2 p-4">

          <div className="col-10">
          <h2>{item.name}</h2>
          </div>
          <div className="col-2">
              <h2>Quantity: {props.cartItems[index].qty}</h2>
              <h2>Price: {props.cartItems[index].qty * item.price}</h2>
          </div>
 

             
        </div>
       ))}
       
    </div>   );
}