<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\HomeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



// Public routes (no authentication required)
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Protected routes (authentication required)
// Route::middleware('auth:sanctum')->group(function () {
//     Route::post('/logout', [AuthController::class, 'logout']);
//     Route::get('/check-auth', [AuthController::class, 'checkAuth']);

//     // Admin routes
//     Route::post('/admin/add-room', [AdminController::class, 'addRoom']);
// });

Route::post('/logout', [AuthController::class, 'logout'])->middleware("auth:sanctum");
Route::post('/admin/add-room', [AdminController::class, 'addRoom']);
// Public routes for home/rooms
Route::get('/rooms', [HomeController::class, 'index']);

Route::prefix('bookings')->group(function () {
    Route::post('/', [BookingController::class, 'store']); // Create a booking
    Route::get('/', [BookingController::class, 'index']); // Get all bookings
    Route::get('/{id}', [BookingController::class, 'show']); // Get a specific booking
    Route::put('/{id}', [BookingController::class, 'update']); // Update a booking
    Route::delete('/{id}', [BookingController::class, 'destroy']); // Delete a booking
});