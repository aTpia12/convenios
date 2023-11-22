<?php

namespace App\Http\Controllers;

use App\Models\Agreement;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserDashboardController extends Controller
{
    public function index(): Response
    {
        $user = auth()->user();
        $agreements = $user->agreements;

        return Inertia::render('DashUser', ['agreements' => $agreements]);
    }

    public function store(Request $request)
    {
        Agreement::create($request->all());
    }
}
