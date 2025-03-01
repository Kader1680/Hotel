<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'role' => 'required|in:admin,user',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
            'phone_number' => 'nullable|digits_between:8,15',
        ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'role' => $request->role,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone_number' => $request->phone_number,
        ]);

        return response()->json(['message' => 'User registered successfully', 'user' => $user], 201);
    }

   
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['message' => 'Login successful', 'token' => $token, 'user' => $user]);
    }

  
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'Logged out successfully']);
    }
}
