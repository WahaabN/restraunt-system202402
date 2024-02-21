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
        $orderID = request('status');
        error_log("An error occurred while processing order ID: $orderID");
        return response()->json($orderID);
    }
}
