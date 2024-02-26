<?php

namespace App\Http\Controllers;
use App\Models\MenuItem;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index(){
        $cart = Cart::where('owner', 'kiosk-1')->first();
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
}
