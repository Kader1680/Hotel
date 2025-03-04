<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class PaymentController extends Controller {
    
    public function store(Request $request) {
        $request->validate([
            'booking_id'     => 'required|exists:bookings,id',
            // 'payment_method' => 'required|in:cart_dahabia,cle,check',
            'payment_method' => 'bullable',
            'card_number'    => 'nullable|required_if:payment_method,cart_dahabia|max:16|min:16',
            'cle_code'       => 'nullable|required_if:payment_method,cle|max:10',
            'check_image'    => 'nullable|required_if:payment_method,check|image|mimes:jpg,png,jpeg|max:2048',
            'amount'         => 'required|numeric|min:1'
        ]);

        $checkImagePath = null;

        if ($request->hasFile('check_image')) {
            $checkImagePath = $request->file('check_image')->store('checks', 'public');
        }

        $payment = Payment::create([
            'user_id'       => $request->user_id,
            'booking_id'    => $request->booking_id,
            'payment_method'=> $request->payment_method,
            'card_number'   => $request->card_number,
            'cle_code'      => $request->cle_code,
            'check_image'   => $checkImagePath,
            'amount'        => $request->amount,
            'status'        => 'pending'
        ]);

        return response()->json(['message' => 'Payment recorded successfully', 'payment' => $payment], 201);
    }

    public function index() {
        $payments = Payment::where('user_id', Auth::id())->get();
        return response()->json($payments);
    }
}
