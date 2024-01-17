<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('therapies', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->longtext('description');
            $table->text('opportunity1');
            $table->text('opportunity2');
            $table->text('opportunity3');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('therapies');
    }
};
