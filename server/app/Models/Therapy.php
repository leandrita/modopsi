<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Therapy extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'opportunity1',
        'opportunity2',
        'opportunity3'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
