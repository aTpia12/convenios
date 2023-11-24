<?php

namespace App\Http\Controllers;

use App\Models\Agreement;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContratoController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $rol = $user->getRoleNames()->first();
        $agreements = Agreement::all();

        return Inertia::render('Contratos', ['agreements' => $agreements, 'rol' => $rol]);
    }
}
