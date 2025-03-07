<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:4',
            'phone_number' => 'nullable|digits_between:2,15',
        ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'role' => $request->role,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone_number' => $request->phone_number,
        ]);

        // Automatically log in the user after registration
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'User registered successfully',
            'token' => $token,
            'user' => $user,
        ], 201);
    }


    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);


        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('authToken')->plainTextToken;
            return response()->json(['token' => $token, 'user' => $user], 200);
        }

        return response()->json(['message' => 'Invalid credentials'], 401);
    }


    protected function authenticated(Request $request, $user)
    {
    if ($user->role == 'admin') {
        return redirect('/admin-dashboard');
    } elseif ($user->role == 'receptionist') {
        return redirect('/receptionist-dashboard');
    } elseif ($user->role == 'food_manager') {
        return redirect('/food-manager-dashboard');
    } elseif ($user->role == 'housekeeper') {
        return redirect('/housekeeping-dashboard');
    } else {
        return redirect('/guest-dashboard');
    }
}

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out'], 200);
    }

    public function user(Request $request)
    {
        return response()->json($request->user());
    }

    

    // public function login(Request $request)
    // {
    //     $credentials = $request->validate([
    //         'email' => 'required|email',
    //         'password' => 'required',
    //     ]);

    //     // if (!Auth::attempt($request->only('email', 'password'))) {
    //     //     return response()->json(['message' => 'Invalid credentials'], 401);
    //     // }

    //     // $user = Auth::user();
    //     // $token = $user->createToken('auth_token')->plainTextToken;

    //     // return response()->json([
    //     //     'message' => 'Login successful',
    //     //     'token' => $token,
    //     //     'user' => $user,
    //     // ]);

        
    //     if (!$token = auth()->attempt($credentials)) {
    //         return response()->json(['error' => 'Unauthorized'], 401);
    //     }

    //     return $this->res($token);
    // }

    // public function checkAuth()
    // {
    //     if (Auth::guard('sanctum')->check()) {
    //         $user = Auth::guard('sanctum')->user();
    //         return response()->json([
    //             'authenticated' => true,
    //             'user' => $user,
    //         ]);
    //     } else {
    //         return response()->json(['authenticated' => false], 401);
    //     }
    // }

    // public function logout(Request $request)
    // {

    //     auth()->logout();
    //     return response()->json(['message' => 'Successfully logged out']);

    //     // $user = Auth::guard('sanctum')->user();

    //     // if ($user) {
    //     //     $user->tokens()->delete(); // Revoke all tokens for the user
    //     //     Log::info('User logged out', ['user_id' => $user->id]); // Log the logout event
    //     //     return response()->json(['message' => 'Logged out successfully']);
    //     // }

    //     // return response()->json(['message' => 'User not authenticated'], 401);
    // }
}