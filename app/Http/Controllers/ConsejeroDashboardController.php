<?php

namespace App\Http\Controllers;

use App\Models\Agreement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ConsejeroDashboardController extends Controller
{
    public function __invoke()
    {
        $names = [];
        $percents = [];
        $colors = ["#C0392B", "#9B59B6","#5499C7","#48C9B0","#80C93F","#A3B61A","#0D76DF","#A61FCE","#48C9B0","#A61FCE","#6F1AB6","#B61A61","#1AB692","##B68B1A","#B68B1A","#DC7633"];
        $count = 0;
        $count = Agreement::where('status', 'Firmado')->count();
        $amount = Agreement::sum('federal_amount')+Agreement::sum('state_amount')+Agreement::sum('private_amount')+Agreement::sum('auto_amount');
        $averages = Agreement::groupBy('type')->select('type', DB::raw('count(*) as total'))->get();

        foreach ($averages as $average){
            $percents[] = $average->total;
            $names[] = $average->type;
            $colorHTML = array_slice($colors, 0, $count);

            $count++;
        }

        return Inertia::render('Consejero', ["count" => $count, "amount" => $amount, "names" => $names, "percents" => $percents, "colors" => $colorHTML]);
    }
}
