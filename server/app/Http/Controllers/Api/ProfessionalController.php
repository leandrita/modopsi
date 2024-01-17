<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Professional;

class ProfessionalController extends Controller
{
    public function index()
    {
        $professionals = Professional::all();

        return response()->json($professionals);
    }

    public function show($id)
    {
        $professional = Professional::find($id);

        if (!$professional) {
            return response()->json(['error' => 'El profesional no se encontró'], 404);
        }

        return response()->json([
            'profesional' => $professional
        ]);
    }
}
