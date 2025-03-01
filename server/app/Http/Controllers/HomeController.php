<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $rooms = Room::all();
        return response()->json([
            'message' => 'Room displayed successfully',
            'rooms' =>  $rooms
        ], 200);
    }
}
