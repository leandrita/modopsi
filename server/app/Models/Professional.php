<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Professional extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'title',
        'profile',
        'area1',
        'area2',
        'area3',
        'image',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
