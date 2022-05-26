<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WorkspaceController;
use App\Http\Controllers\TaskController;

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
    return view('welcome');
});


/*
work with web.php for web development, api.php if working with api.php
so, have a router created, if user goes to main url ('/') of our application, we are returning welcome ('welcome')
this value 'welcome' is the welcome.blade in resources/views folder, so name must be match
app/http/controllers folder where controller.php helps working with data.php
app/models folder of user.php if we need to talk to the database we will be using the models default we have user model created there.
*/

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

//Route::get('/get/workspace/list', [WorkspaceController::class, 'getSpaceList'])->name('space_list');

Route::get('/', [TaskController::class, 'index'])->name('index');

Route::resource('task', TaskController::class);
