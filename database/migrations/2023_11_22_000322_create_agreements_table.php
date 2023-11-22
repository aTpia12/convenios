<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('agreements', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->bigInteger('number');
            $table->string('name')->unique();
            $table->string('type');
            $table->string('subject');
            $table->string('parts');
            $table->string('parts_two');
            $table->string('status');
            $table->integer('average');
            $table->string('finance_font');
            $table->double('federal_amount', 9, 2);
            $table->double('state_amount', 9, 2);
            $table->double('private_amount', 9, 2);
            $table->double('auto_amount', 9, 2);
            $table->date('date_sign')->nullable();
            $table->date('expired')->nullable();
            $table->text('comments')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('agreements');
    }
};
