<?php

namespace App\Services;

use App\Models\Agreement;
use Illuminate\Support\Facades\DB;

class ConsejeroDashboardService{

    public function dashboard($trimestre)
    {
        $names = [];
        $percents = [];
        $colors = ["#C0392B", "#9B59B6","#5499C7","#48C9B0","#80C93F","#A3B61A","#0D76DF","#A61FCE","#48C9B0","#A61FCE","#6F1AB6","#B61A61","#1AB692","##B68B1A","#B68B1A","#DC7633"];
        $count2 = 0;
        $count = Agreement::where('status', 'Firmado')->count();
        $amount = Agreement::sum('federal_amount')+Agreement::sum('state_amount')+Agreement::sum('private_amount')+Agreement::sum('auto_amount');
        $averages = Agreement::groupBy('type')->where(DB::raw('QUARTER(created_at)'), $trimestre)->select('type', DB::raw('count(*) as total'))->get();
        $colorHTML = "";

        foreach ($averages as $average){
            $percents[] = ($average->total*100)/$count;
            $names[] = $average->type;
            $colorHTML = array_slice($colors, 0, $count2+1);

            $count2++;
        }

        return ["count" => $count, "amount" => number_format($amount, 2, '.', ','), "names" => $names, "percents" => $percents, "colors" => $colorHTML];
    }
}
