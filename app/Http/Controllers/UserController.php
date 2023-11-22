<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response
    {
        $users = User::with('roles')->get();

        return Inertia::render('Users', ["users" => $users]);
    }

    public function store(Request $request)
    {
        $user = User::create($request->all());

        $user->assignRole($request->rol);
    }
}
