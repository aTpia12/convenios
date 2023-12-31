<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserDashboardController;
use App\Http\Controllers\ConsejeroDashboardController;
use App\Http\Controllers\FirmadosController;
use App\Http\Controllers\ContratoController;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/admin', function () {
    return Inertia::render('Admin');
})->middleware(['auth', 'verified'])->name('admin');

Route::get('/consejero/{trimester?}', [ConsejeroDashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('consejero.index');
Route::get('/firmados', FirmadosController::class)->middleware(['auth', 'verified'])->name('firmados');
Route::get('/contratos', [ContratoController::class, 'index'])->middleware(['auth', 'verified'])->name('contratos');

Route::get('/user-dashboard', [UserDashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('user-dashboard.index');
Route::post('/user-dashboard', [UserDashboardController::class, 'store'])->middleware(['auth', 'verified'])->name('user-dashboard.store');

Route::get('/users', [UserController::class, 'index'])->middleware(['auth', 'verified'])->name('users.index');
Route::post('/users', [UserController::class, 'store'])->middleware(['auth', 'verified'])->name('users.store');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
