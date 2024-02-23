import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function AdminAddOrder() {
  function createOrder() {
    console.log('/api/createOrder', { orderName });
    
    // Send a POST request to update the status
    axios.post('/api/createOrder', { orderName })
      .then(response => {
        console.log('Status updated successfully:', response.data);
      })
      .catch(error => {
        console.error('Error updating status:', error);
      });
  }

const [orderName, setOrderName] = useState('')


const handleInputChange = (formItem) => {
  setOrderName(formItem.target.value)

}


const submitOrder = ()=>{
  createOrder();
  setOrderName('')
}
 
    return (
      <div className='container'>

        
          <h1>THIS IS THE ORDER SECTION</h1>

     
      <input value = {orderName} onChange = {handleInputChange} type="text"></input>
      <button onClick={submitOrder}>submit</button>
      
      </div>    );
}
