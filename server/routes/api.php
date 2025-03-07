<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\RoomController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;




Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

 // Route::middleware('auth:sanctum')->group(function () {
//     Route::post('/logout', [AuthController::class, 'logout']);
//     Route::get('/check-auth', [AuthController::class, 'checkAuth']);

//     // Admin routes
//     Route::post('/admin/add-room', [AdminController::class, 'addRoom']);
// });

Route::post('/logout', [AuthController::class, 'logout'])->middleware("auth:sanctum");
Route::post('/admin/add-room', [AdminController::class, 'addRoom']);
Route::post('/admin/user-management', [AdminController::class, 'addEmployer']);

Route::get('/admin/user-management/all-employers', [AdminController::class, 'getAllEmployer']);
 

Route::get('/rooms', [HomeController::class, 'index']);
Route::get('/room/{id}', [RoomController::class, 'show']);

Route::prefix('bookings')->group(function () {
    Route::post('/', [BookingController::class, 'store']); 
    Route::get('/', [BookingController::class, 'index']);  
    Route::get('/{id}', [BookingController::class, 'show']);  
    Route::put('/{id}', [BookingController::class, 'update']);  
    Route::delete('/{id}', [BookingController::class, 'destroy']);  
});


Route::post('/select-payment', [PaymentController::class, 'store']);


route::middleware('auth:sanctum', 'admin')->group(function (){
    Route::get('/admin', [AdminController::class, 'index']);
});