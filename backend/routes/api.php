<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('student', 'Student\StudentController@student');
Route::get('student/{id}', 'Student\StudentController@studentByID');
Route::post('student', 'Student\StudentController@studentSave');
Route::put('student/{id}', 'Student\StudentController@studentUpdate');
Route::delete('student/{id}', 'Student\StudentController@studentDelete');

Route::post('login', 'AuthController@login');
// Route::post('signup', 'AuthController@signup');
// Route::post('logout', 'AuthController@logout');
// Route::post('refresh', 'AuthController@refresh');
// Route::post('me', 'AuthController@me');
// Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
// Route::post('resetPassword', 'ChangePasswordController@process');
