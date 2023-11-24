<?php

namespace App\Http\Controllers;

use App\Services\ConsejeroDashboardService;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ConsejeroDashboardController extends Controller
{
    public function __construct(
        private readonly ConsejeroDashboardService $consejeroDashboardService
    )
    {}

    public function index(?Int $trimester = 0): Response
    {
        $mes = date("m");
        $trimester === 0 && $trimester = intval($mes/3)+1;

        $data = $this->consejeroDashboardService->dashboard(intval($trimester));

        return Inertia::render('Consejero', $data);
    }

}
