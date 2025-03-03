<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function show($id)
    {
        $room = Room::find($id);
        if ($room){
            return response()->json(['room' => $room], 200);
        }
        return response()->json(['error' => 'Room not found'], 404);
    }

    
}
