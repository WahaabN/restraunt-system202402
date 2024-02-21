import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function AdminOrderQueue() {
        
  function changeStatus(orderID, status) {
    console.log('/api/updateOrderStatus', { orderID, status });
    
    // Send a POST request to update the status
    axios.post('/api/updateOrderStatus', { orderID, status })
      .then(response => {
        console.log('Status updated successfully:', response.data);
      })
      .catch(error => {
        console.error('Error updating status:', error);
      });
  }
    const [data, setData] = useState([]);

    const fetchData = async () => {
      try {
        const response = await axios.get('/api/orders');
        setData(response.data);
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
            {data.map((order) => (
              

              <div className={`queue-card col-4 p-4 ${order.status === 0 ? 'awaiting-queue-card' : order.status === 1 ? 'preparing-queue-card' : order.status === 2 ?'ready-queue-card': ''}`} key={order.order_id}>
                <h2>{order.order_number}</h2>
              
   


                {order.status === 0 && 
                  <h2>awaiting</h2>
                }
                {order.status === 1 && 
                  <h2>with the chef</h2>
                }
                {order.status === 2 && 
                  <h2>ORDERS UP</h2>
                }
                <div className='d-flex'>
                <button onClick={() => changeStatus(order.id, 0)} className='ml-1 mr-1'>Awaiting</button>
                <button onClick={() => changeStatus(order.id, 1)} className='ml-1 mr-1'>Preparing</button>
                <button onClick={() => changeStatus(order.id, 2)} className='ml-1 mr-1'>Ready</button>
                <button className='ml-1 mr-1'>Delete</button>
                </div>
              </div>
            ))}
          </div>


      </div>    );
}
