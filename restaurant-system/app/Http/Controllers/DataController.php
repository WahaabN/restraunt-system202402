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

        

        
        return response()->json($orderID);
    }
}
