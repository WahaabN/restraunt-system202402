import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import AdminItemCards from '@/Components/AdminitemCard';
import AdminItemCard from '@/Components/AdminitemCard';

export default function AdminItemMenu(props) {
    // Check if items is an array before mapping over it
    console.table(props.items);

   
    const [items, setItems] = useState(props.items)


    
  
    return (
      <div className="container">

        <div className="row align-items-center">
        {items.map((item) => (
          <AdminItemCard item = {item}/>
        ))}
        </div>

      </div>
    );
  }
