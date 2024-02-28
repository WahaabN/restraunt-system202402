import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter, Box } from '@chakra-ui/react'

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

       // console.table(response.data.orderItems)
  //  console.table(orderData)
   //console.table(itemData)
        
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
            {orderData.map((order) => (


              <div className={`queue-card col-4 p-4 ${order.status === 0 ? 'awaiting-queue-card' : order.status === 1 ? 'preparing-queue-card' : order.status === 2 ?'ready-queue-card': ''}`} key={order.order_id}>


                <Card color='#ffffff'backgroundColor={
            order.status === 0 ? '#545454' :
            order.status === 1 ? '#FF964F' :
            order.status === 2 ? '#56AE57' :
            'white'
          }>
                <CardBody>
                <h2>{order.order_number}- {order.customer_name}</h2>
                {order.status === 0 && 
                  <h2>awaiting</h2>
                }
                {order.status === 1 && 
                  <h2>with the chef</h2>
                }
                {order.status === 2 && 
                  <h2>ORDERS UP</h2>
                }


<OrderDetails itemData = {itemData} orderID = {order.id}/>


                <Box color = {'#000000'} backgroundColor = {"#ffffff"} className='d-flex justify-content-center'>


                <button onClick={() => changeStatus(order.id, 0)} className='w-100 mr-4 border p-2'>Awaiting</button>

                <button onClick={() => changeStatus(order.id, 1)} className='w-100 ml-4 mr-4 border p-2'>Preparing</button>

                <button onClick={() => changeStatus(order.id, 2)} className='w-100 ml-4 mr-4 border p-2'>Ready</button>

                <button onClick={() => changeStatus(order.id, "delete")} className='w-100 ml-4 border p-2'>Delete</button>

                </Box>
  </CardBody>

                </Card>




              </div>
            ))}
          </div>


      </div>  );
}




