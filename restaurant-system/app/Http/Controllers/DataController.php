<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;

class DataController extends Controller
{
    public function index()
    {
        $data = Order::all();

        return response()->json($data);
    }


    public function updateOrderStatus(){

        $orderID = request('orderID');
        $status = request('status');
        error_log("An error occurred while processing order ID: $orderID");

        $order = Order::findOrFail($orderID);

        if($status === "delete"){
            $order->delete();
        }else{
            $order->status = $status;
            $order->save();
        }

        

        
        return response()->json($order);
    }

    public function createOrder(){

        $order = new Order();
        $order->customer_name = request("orderName");
        $order->order_number =  rand(1000, 9999).str_pad($order->id, 3, STR_PAD_LEFT);
        $order->status = 0;

        $order->save();

       // error_log("An error occurred while processing order ID: $orderID");




        

        
        return response()->json($order);
    }
}
