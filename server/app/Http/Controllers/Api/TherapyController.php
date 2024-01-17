<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Therapy;

class TherapyController extends Controller
{
    public function index()
    {
        $therapies = Therapy::all();

        return response()->json($therapies);
    }

    public function show($id)
    {
        $therapy = Therapy::find($id);

        if (!$therapy) {
            return response()->json(['error' => 'La terapia no se encontró'], 404);
        }

        return response()->json([
            'terapia' => $therapy
        ]);
    }
}
