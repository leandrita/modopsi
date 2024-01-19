<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Professional;

class ProfessionalController extends Controller
{
    public function index()
    {
        $professionals = Professional::all();

        foreach ($professionals as $professional) {
            $professional->image_url = asset('storage/' . $professional->image);
        }

        return response()->json($professionals);
    }

    public function show($id)
    {
        $professional = Professional::find($id);

        if (!$professional) {
            return response()->json(['error' => 'El profesional no se encontró'], 404);
        }

        $imageUrl = asset('storage/' . $professional->image);

        return response()->json([
            'profesional' => $professional,
            'image_url' => $imageUrl
        ]);
    }
}
