import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import InputError from '@/Components/InputError';

export default function OrderDetails(props) {
            

   //console.table(props.itemData)
    //console.log(props.orderID)

    



    const filteredItems = props.itemData.filter(item => item.order_id === props.orderID)

    const [data, setOrderData] = useState(filteredItems)


    return (
     <div>
        {data.map((orderItem) => (
            <div className="row">
<div className="d-flex">
                <p>ItemName: {orderItem.item_id}</p>
                <p>qty: {orderItem.qty}</p>
            </div>
            </div>

        ))}
     </div>   );
}