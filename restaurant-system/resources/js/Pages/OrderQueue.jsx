import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function OrderQueue({ orderQueue }) {
    // Check if orderQueue is an array before mapping over it
      
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('/orders');
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    console.log(data);
    return (
      <div className="home">
        {orderQueue.map((order) => (
          <div className='home mt-5 mb-5' key={order.order_id}>
            <h2>{order.order_id}</h2>
            <h2>{order.customer_name}</h2>
            <h2>{order.status}</h2>


            {order.status === 0 && 
              <h2>awaiting</h2>
            }
            {order.status === 1 && 
              <h2>with the chef</h2>
            }
            {order.status === 2 && 
              <h2>ORDERS UP</h2>
            }
          </div>
        ))}
      </div>
    );
}
