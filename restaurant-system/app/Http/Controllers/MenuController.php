<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;



class MenuController extends Controller
{
    //
    public function index(){
        $items = [
            ['type' => 'Hawaiian', 'base' => 'Cheesy crust'],
            ['type' => 'Volcano', 'base' => 'Garlic crust'],
            ['type' => 'Veg Supreme', 'base' => 'Thin & crispy'],
            ['type' => 'Pepperoni', 'base' => 'Original crust'],
            ['type' => 'Margherita', 'base' => 'Classic crust'],
            ['type' => 'BBQ Chicken', 'base' => 'Stuffed crust'],
            ['type' => 'Supreme', 'base' => 'Pan crust'],
            ['type' => 'Spinach and Feta', 'base' => 'Whole wheat crust'],
            ['type' => 'Meat Feast', 'base' => 'Deep dish crust'],
            ['type' => 'Four Cheese', 'base' => 'Gluten-free crust'],
            ['type' => 'Buffalo Chicken', 'base' => 'Hand-tossed crust'],
            ['type' => 'Pesto', 'base' => 'Artisan crust'],
            ['type' => 'Seafood', 'base' => 'Thin & crispy crust']
        ];
        

        return view('menu', ['items' => $items]);
    }

    public function showOrders(){
        $orderQueue = [
            [
                'order_id' => 1,
                'order_number' => 'ORD001',
                'customer_name' => 'John Doe',
                'status' => 0 // waiting
            ],
            [
                'order_id' => 2,
                'order_number' => 'ORD002',
                'customer_name' => 'Jane Smith',
                'status' => 1 // being prepared
            ],
            [
                'order_id' => 3,
                'order_number' => 'ORD003',
                'customer_name' => 'Alice Johnson',
                'status' => 2 // ready to collect
            ],
            [
                'order_id' => 4,
                'order_number' => 'ORD004',
                'customer_name' => 'Bob Brown',
                'status' => 0 // waiting
            ],
            // Add more orders as needed
        ];

        return Inertia::render('OrderQueue', [
            'orders'=> $orderQueue
            ]);
    }

    public function show($id){



        return view('item', ["id" => $id]);
    }
}
