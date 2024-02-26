import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

export default function ItemMenu({ items }) {
    // Check if items is an array before mapping over it

    console.table(items);
  
    return (
      <div className="container">

        <div className="row align-items-center">
        {items.map((item) => (
            <div className='col-4 p-4'>
              <Card color = {'#ffffff'} bg={'#545454'} padding={20}>
              <h2>{item.name}</h2>
                <h2>{item.description}</h2>
                <h3>£{item.price}</h3>
              </Card>

            </div>
        ))}
        </div>

      </div>
    );
  }
