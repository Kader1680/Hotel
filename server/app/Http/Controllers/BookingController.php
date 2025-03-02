<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'id_user' => 'required|exists:users,id',
            'id_room' => 'required|exists:rooms,id',
            'checkin' => 'required|date',
            'checkout' => 'required|date|after:checkin',
        ]);

        $booking = Booking::create($request->all());

        return response()->json([
            'message' => 'Booking created successfully!',
            'booking' => $booking,
        ], 201);
    }

    // Get all bookings
    public function index()
    {
        $bookings = Booking::with(['user', 'room'])->get();

        return response()->json($bookings);
    }

    // Get a specific booking by ID
    public function show($id)
    {
        $booking = Booking::with(['user', 'room'])->find($id);

        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }

        return response()->json($booking);
    }

    // Update a booking
    public function update(Request $request, $id)
    {
        $booking = Booking::find($id);

        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }

        $request->validate([
            'id_user' => 'sometimes|exists:users,id',
            'id_room' => 'sometimes|exists:rooms,id',
            'checkin' => 'sometimes|date',
            'checkout' => 'sometimes|date|after:checkin',
        ]);

        $booking->update($request->all());

        return response()->json([
            'message' => 'Booking updated successfully!',
            'booking' => $booking,
        ]);
    }

    // Delete a booking
    public function destroy($id)
    {
        $booking = Booking::find($id);

        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }

        $booking->delete();

        return response()->json(['message' => 'Booking deleted successfully!']);
    }
}
