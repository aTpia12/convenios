<?php

namespace App\Http\Controllers;

use App\Models\Agreement;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FirmadosController extends Controller
{
    public function __invoke()
    {
        $firmados = Agreement::where('status', 'Firmado')->get();

        return Inertia::render('Firmados', ["firmados" => $firmados]);
    }
}
