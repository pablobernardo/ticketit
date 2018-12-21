<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Ticketit connection
        $cn = config('ticketit.connection');

        Schema::connection($cn)->create('ticketit_settings', function (Blueprint $table) {
            $table->increments('id');
            $table->string('lang')->unique()->nullable();
            $table->string('slug')->unique()->index();
            $table->string('value');
            $table->string('default');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Ticketit connection
        $cn = config('ticketit.connection');

        Schema::connection($cn)->drop('ticketit_settings');
    }
}
