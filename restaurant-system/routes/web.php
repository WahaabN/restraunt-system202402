<?php

use App\Http\Controllers\CartController;
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




Route::get('/menu', [MenuController::class, 'index'])->name('menu.index');

Route::get('/queue', [MenuController::class, 'showOrders']);
Route::get('/menu/{id}', [MenuController::class, 'show']);
Route::post('/menu/{id}', [MenuController::class, 'addToCart']);

Route::get('/cart', [CartController::class,'index']);
Route::get('/cart/checkout', [CartController::class,'loadCheckout']);
Route::post('/cart/checkout', [CartController::class,'checkout']);

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
