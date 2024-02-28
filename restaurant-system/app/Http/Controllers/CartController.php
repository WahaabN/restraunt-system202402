<?php

namespace App\Http\Controllers;
use App\Models\MenuItem;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class CartController extends Controller
{
    public function index(){
        
        $user = Auth::user();
        //make into helper function?
        $cart = Cart::where('owner', $user->id)->first();
        $cartItems = CartItem::where('cart_id',$cart->id)->get();


        foreach( $cartItems as $cartItem ){
           $menuItem = MenuItem::where('id',$cartItem->item_id)->first();

        
           if ($menuItem) {
               $menuItemsArray[] = $menuItem; // Add menu item to the array
           }

           
        }
      $cartItems['itemData'] = $menuItemsArray;

      error_log($cartItems);
        return Inertia::render('Cart', [
            'cartItems'=> $cartItems
            ]);
    }

    public function loadCheckout(){

        //make into helper function?
        $user = Auth::user();
        $cart = Cart::where('owner', $user->id)->first();
        $cartItems = CartItem::where('cart_id',$cart->id)->get();

        if($cart !== null){

        }
        foreach( $cartItems as $cartItem ){
           $menuItem = MenuItem::where('id',$cartItem->item_id)->first();

        
           if ($menuItem) {
               $menuItemsArray[] = $menuItem; // Add menu item to the array
           }

           
        }
      $cartItems['itemData'] = $menuItemsArray;

      error_log($cartItems);
        return Inertia::render('Checkout', [
            'cartItems'=> $cartItems
            ]);
    } 
    public function checkout(){

        $user = Auth::user();

            $order = new Order();
            $cart = Cart::where('owner', $user->id)->first();
            
            $order->customer_name = request("orderName");
            $order->order_number =  rand(1000, 9999).str_pad($order->id, 3, STR_PAD_LEFT);
            $order->status = 0;
            $order->save();


            $cart->delete();
            
            error_log(request("cartOwner"));
            error_log(request("orderName"));
            
    } 
}
