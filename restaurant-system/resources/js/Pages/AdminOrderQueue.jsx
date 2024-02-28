import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import OrderDetails from '@/Components/OrderDetails';


export default function AdminOrderQueue(props) {
  const { accessToken } = props;
 // console.table(props);
  //console.log(accessToken)
  function changeStatus(orderID, status) {
   // console.log('/api/updateOrderStatus', { orderID, status });

    // Send a POST request to update the status
    axios.post('/api/updateOrderStatus', { orderID, status },{
      headers: {
        'Authorization': `Bearer ${accessToken}`
    }
    })
      .then(response => {
        console.log('Status updated successfully:', response.responseData);
      })
      .catch(error => {
        console.error('Error updating status:', error);
      });
  }
    const [orderData, setOrderData] = useState([]);
    const [itemData, setItemData] = useState([]);


    const fetchData = async () => {
      try {
        const response = await axios.get('/api/orders');
        setOrderData(response.data.orders)
        setItemData(response.data.orderItems)

  //    console.table(orderData)
    //  /   console.table(itemData)
        
       // console.table(response.data.orders);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };



    useEffect(() => {
      fetchData();       
      const interval = setInterval(fetchData, 1000); // Fetch data every 1 seconds

      return () => clearInterval(interval); // Cleanup on unmount
    }, []);

     

    return (
     <div className='container'>
        <div className="row">
        {orderData.map((order, index) => (
          <div className="col-3">

              <h1>{order.customer_name}</h1>
              

              <OrderDetails itemData = {itemData} orderID = {order.id}/>

          </div>
                      ))}
        </div>
     </div>   );
}