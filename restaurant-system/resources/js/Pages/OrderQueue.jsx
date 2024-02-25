import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
export default function OrderQueue() {
    // Check if orderQueue is an array before mapping over it
      
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
      fetchData(); // Initial fetch
      const interval = setInterval(fetchData, 1000); // Fetch data every 5 seconds
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, []);
  

    
  

    console.log(data);
    return (
      <div className='container'>

          <div className="row">
            {data.filter(order => order.status === 0).map((order) => (
   
          
              <div className={`queue-card col-4 p-4 awaiting-queue-card`} key={order.order_id}>
                  
                <Card color='#ffffff'backgroundColor='#545454'>
                <CardBody>
                <h2>{order.order_number}</h2>
                <h2>awaiting</h2>
  </CardBody>
                </Card>
              
              
   


                 
                

              </div>
            ))}
          </div>
          <div className="row">
            {data.filter(order => order.status === 1).map((order) => (
              

              <div className={`queue-card col-4 p-4 preparing-queue-card`} key={order.order_id}>
               
              
                <Card color='#ffffff'backgroundColor='#FF964F'>
                <CardBody>
                <h2>{order.order_number}</h2>
                <h2>with the chef</h2>
  </CardBody>
                </Card>


              
                  
              
      
              </div>
            ))}
          </div>
          <div className="row">
            {data.filter(order => order.status === 2).map((order) => (
              

              <div className={`queue-card col-4 p-4 ready-queue-card`} key={order.order_id}>

<Card color='#ffffff'backgroundColor='#56AE57'>
                <CardBody>
                <h2>{order.order_number}</h2>
                <h2>ORDERS UP</h2>
  </CardBody>
                </Card>
                
              
   


        

                 
            
              </div>
            ))}
          </div>


      </div>    );
}
