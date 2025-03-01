<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function addRoom(Request $request)
    {
        
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'max_occupation' => 'required|integer|min:1',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('rooms', 'public');
            $validated['image'] = $imagePath;
        }

        $room = Room::create($validated);

        return response()->json([
            'message' => 'Room added successfully',
            'room' => $room
        ], 201);
    }

}
