<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;



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

    public function show($id){



        return view('item', ["id" => $id]);
    }
}
