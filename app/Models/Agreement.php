<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agreement extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'number',
        'name',
        'type',
        'subject',
        'parts',
        'parts_two',
        'status',
        'average',
        'finance_font',
        'federal_amount',
        'state_amount',
        'private_amount',
        'auto_amount',
        'date_sign',
        'expired',
        'comments',
    ];

}
