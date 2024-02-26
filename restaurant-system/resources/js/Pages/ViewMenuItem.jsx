import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter,  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,Button, ButtonGroup,   FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText } from '@chakra-ui/react'

export default function ViewMenuItem({ itemData }) {
    // Check if items is an array before mapping over it

    console.table(itemData);
    

    const [quantity, setQuantity] = useState('1')


    function addToCart(itemID, qty) {

     // console.log('/menu/'+itemID, { itemID, qty });
      const cartOwner = "kiosk-1";
      // Send a POST request to update the status
      axios.post('/menu/'+itemID,{ itemID, qty, cartOwner},{

      })
        .then(response => {
          console.log('Status updated successfully:', response.data);
          window.location.href = "/menu";
        })
        .catch(error => {
          console.error('Error updating status:', error);
        });

        
      
  
  
    }


    return (
      <div className="container">
        
        <div className="row">

            <div className="col-4">
                IMAGE GOES HERE
            </div>
            <div className="col-8">
                  <h2>{itemData.name}</h2>
                  <h2>{itemData.description}</h2>
                  <h2>{itemData.price}</h2>
                    <FormControl>
                      <FormLabel>Amount</FormLabel>
                      <NumberInput value={quantity} onChange={(valueString) => {
                        
                        setQuantity(valueString)
                        
                        }} min={1} defaultValue={1}>
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                                                 
                    <Button
            mt={4}
            colorScheme='teal'
            onClick={() => {
              addToCart(itemData.id, quantity)
            }}
            type='submit'
          >
            Submit
          </Button>
                    </FormControl>
                  



            </div>

        </div>

      </div>
    );
  }
