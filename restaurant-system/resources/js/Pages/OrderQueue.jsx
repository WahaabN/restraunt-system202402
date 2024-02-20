import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function OrderQueue({ orderQueue }) {
    // Check if items is an array before mapping over it

  
    return (
      <div className="home">
        
        {orderQueue.map((order) => (

          
            <div className='home mt-5 mb-5'>

                <h2>{order.order_id}</h2>
                <h2>{order.customer_name}</h2>
                
                {order.status = 0 && 
                  <h2>awaiting</h2>
                }
                {order.status = 1 && 
                  <h2>with the chef</h2>
                }
                {order.status = 2 && 
                  <h2>ORDERS UP</h2>
                }
                
               <h2></h2>
            </div>
        ))}
      </div>
    );
  }
