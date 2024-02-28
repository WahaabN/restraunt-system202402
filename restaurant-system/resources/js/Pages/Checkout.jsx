import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter, Divider, Button,Input  } from '@chakra-ui/react'


export default function Cart(props) {
  //const { accessToken } = props;

  let cartData = props.cartItems.itemData
  
  
  console.table(cartData)

  console.table(props.cartItems)

  const [orderName, setOrderName] = useState("")
  function checkout() {

    // console.log('/menu/'+itemID, { itemID, qty });
    
     // Send a POST request to update the status
     axios.post('/cart/checkout',{orderName},{

     })
       .then(response => {
         console.log('Checkout sucessful:', response.data);
         window.location.href = "/menu";
       })
       .catch(error => {
         console.error('Error updating status:', error);
       });

       
     
 
 
   }


    return (<div className="container">
        
       {cartData.map((item, index) => (
        
        <div className="row mt-2 p-4">

          <div  className="col-10">
          <h2>{item.name}</h2>
          </div>
          <div className="col-2">
              <h2>Quantity: {props.cartItems[index].qty}</h2>
              <h2>Price: {props.cartItems[index].qty * item.price}</h2>
          </div>
 

          <Divider mt = {7} orientation='horizontal' />   
        </div>
       ))}
       <div className="row">
        <Input onChange = {(e) => (
          setOrderName(e.target.value)
        )} placeholder='Enter name' />
       <Button
            mt={4}
            colorScheme='teal'
            onClick={() => {
              checkout()
            }}
            type='submit'
          >
            Submit
          </Button>
       </div>
    </div>   );
}