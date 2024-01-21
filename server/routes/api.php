<?php

use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\ProfessionalController;
use App\Http\Controllers\Api\TherapyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/therapies', [TherapyController::class, 'index']);
Route::get('/therapy/{id}', [TherapyController::class, 'show']);

Route::get('/professionals', [ProfessionalController::class, 'index']);
Route::get('/professional/{id}', [ProfessionalController::class, 'show']);
