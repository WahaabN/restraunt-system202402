import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function ItemMenu({ items }) {
    // Check if items is an array before mapping over it

  
    return (
      <div className="home">
        {items.map((item) => (
            <div className='home'>
                <h2>{item.type}</h2>
                <h2>{item.base}</h2>
            </div>
        ))}
      </div>
    );
  }
