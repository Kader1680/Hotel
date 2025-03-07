<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_user',
        'id_room',
        'checkin',
        'checkout',
        'total_price',
        'status'
    ];

    // Define the relationship with the User model
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    // Define the relationship with the Room model
    public function room()
    {
        return $this->belongsTo(Room::class, 'id_room');
    }
}
