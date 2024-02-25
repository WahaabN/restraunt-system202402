<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MenuController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/menu', function () {

    $items = [
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

    
    return Inertia::render('ItemMenu', [
    'items'=> $items
    ]);
});




Route::get('/queue', [MenuController::class, 'showOrders']);



Route::get('/dashboard', function (Request $request) {
    $user = Auth::user();
    $user->tokens->each->delete();
    $token = $user->createToken('dashboard-token')->plainTextToken;


    return Inertia::render('Dashboard', [
        'token' => $token
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
});

require __DIR__.'/auth.php';
