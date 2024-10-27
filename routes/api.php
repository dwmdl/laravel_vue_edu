<?php /** @noinspection UnusedFunctionResultInspection */

use App\Http\Controllers\Person\IndexController;
use App\Http\Controllers\Person\StoreController;
use App\Http\Controllers\Person\UpdateController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', static function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['namespace' => 'Person', 'prefix' => 'people'], static function () {
    Route::post('/', [StoreController::class, '__invoke']);
    Route::get('/', [IndexController::class, '__invoke']);
    Route::patch('/{person}', [UpdateController::class, '__invoke']);
});
