<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\CartItem;
use App\Models\Order;
use App\Models\Cart;
use App\Models\MenuItem;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;



class MenuController extends Controller
{
    //
    public function index(){
        $items = MenuItem::all();


        //error_log($items);
        
           
    return Inertia::render('ItemMenu', [
    'items'=> $items
    ]);
    }

    
    public function showOrders(){


        return Inertia::render('OrderQueue');
    }

    public function show($id){


        $itemData = MenuItem::where('id', $id)->first();

       // error_log($itemData);
        return Inertia::render('ViewMenuItem', ['itemData' => $itemData]);
    }

    public function addToCart($id){
        $qty = request('qty');
        $cartOwner = request('cartOwner');
        $user = auth()->user();

        $item = MenuItem::where('id', $id)->first();
        $cart = Cart::where('owner', $cartOwner)->first();
        $cartItem = new CartItem();
        
        if($cart == null){

            $cart = new Cart();
            $cart->owner = $cartOwner;
            $cart->save();
        }

        $cartItem->cart_id = $cart->id;
        $cartItem->item_id = $item->id;
        $cartItem->qty = $qty;

        $cartItem->save();


        error_log($item->id);
        error_log($cartOwner);
        error_log($qty);


        
       
    }
}
