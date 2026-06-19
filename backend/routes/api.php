<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DroneController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\AdminDroneController;
use App\Http\Middleware\AdminAuth;
use Illuminate\Support\Facades\Route;

// Public Routes
Route::post('/login', [AuthController::class, 'login']);

// Protected Routes (Sanctum)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/drone-profile', [DroneController::class, 'profile']);
    Route::post('/orders', [OrderController::class, 'store']);
});

// Admin Routes (Custom Bearer Authentication)
Route::middleware(AdminAuth::class)->prefix('admin')->group(function () {
    Route::post('/drone-profile', [AdminDroneController::class, 'updateDroneProfile']);
    Route::post('/tutorials', [AdminDroneController::class, 'updateTutorials']);
    Route::post('/troubleshoot', [AdminDroneController::class, 'updateTroubleshoot']);
    Route::post('/parts', [AdminDroneController::class, 'updateParts']);
    Route::post('/guides', [AdminDroneController::class, 'updateGuides']);
    Route::post('/checklists', [AdminDroneController::class, 'updateChecklists']);
    Route::post('/shared-content', [AdminDroneController::class, 'updateSharedContent']);
});

