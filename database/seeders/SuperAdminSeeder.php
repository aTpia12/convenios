<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;

class SuperAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::factory()->create([
            "name" => "Super Admin",
            "email" => "admin@admin.com",
            "password" => Hash::make("zxasQW12"),
        ]);

        $role = Role::create([
            'name' => 'Admin',
        ]);
        Role::create([
            'name' => 'Consejero',
        ]);
        Role::create([
            'name' => 'Usuario',
        ]);

        $user->assignRole($role);
    }
}
