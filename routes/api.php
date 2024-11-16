<?php /** @noinspection UnusedFunctionResultInspection */

use App\Http\Controllers\Person\DeleteController;
use App\Http\Controllers\Person\IndexController;
use App\Http\Controllers\Person\ShowController;
use App\Http\Controllers\Person\StoreController;
use App\Http\Controllers\Person\UpdateController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', static function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['namespace' => 'Person', 'prefix' => 'people'], static function () {
    Route::get('/', [IndexController::class, '__invoke']);
    Route::get('/{personId}', [ShowController::class, '__invoke']);
    Route::post('/', [StoreController::class, '__invoke']);
    Route::patch('/{person}', [UpdateController::class, '__invoke']);
    Route::delete('/{person}', [DeleteController::class, '__invoke']);
});
