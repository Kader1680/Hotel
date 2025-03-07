<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ReceptionistController extends Controller
{
    public function registerGuest(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:4',
            'phone_number' => 'nullable|digits_between:2,15',
        ]);

        $guest = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'role' => 'guest',
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone_number' => $request->phone_number,
        ]);

        // Automatically log in the user after registration
        $token = $guest->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'guest registered successfully',
            'token' => $token,
            'guest' => $guest,
        ], 201);
    }

    public function getAllGuests()
    {
        $guests = User::where('role', 'guest')->get();

        return response()->json($guests);
    }
}
