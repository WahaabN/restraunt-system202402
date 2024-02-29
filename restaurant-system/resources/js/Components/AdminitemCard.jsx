import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, NumberInput, NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper } from '@chakra-ui/react'
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';

import axios from 'axios';
export default function AdminItemCard(props) {
    // Check if items is an array before mapping over it

   // console.table(props.item)
   
    const [item, setItem] = useState(props.item)
    const { data, setData, post, processing, errors, reset } = useForm({
        qty: 1,
        item: item.id
        
    });
    const [quantity, setQuantity] = useState('1')
  
    console.table(data);


    const submitForm = (itemID, qty) => {
     console.log(itemID, qty)
     
      axios.post('/dashboard/add/'+itemID,{itemID, qty},{

      })
        .then(response => {
          console.log('Checkout sucessful:', response.data);
      
        })
        .catch(error => {
          console.error('Error updating status:', error);
        });
  
    }


   
  
    return (
      <div className="col-3">


 
              <Card color = {'#ffffff'} bg={'#545454'} padding = {10} marginBottom={10}>
              <h2 style={{ fontWeight : 700, fontSize: '1rem' }}>{item.name}</h2>
              
                <h3>£{item.price}</h3>


<NumberInput min = {1} defaultValue={1} onChange={(valueString) => {setData("qty",valueString) }}>
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>

                      <button onClick={() => submitForm(data.item, data.qty)}>test</button>
              </Card>
          

        </div>

    );
  }
