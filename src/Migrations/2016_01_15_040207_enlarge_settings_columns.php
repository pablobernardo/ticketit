<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class EnlargeSettingsColumns extends Migration
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

        //make value, default columns bigger
        Schema::connection($cn)->table('ticketit_settings', function (Blueprint $table) {
            $table->mediumText('value')->change();
            $table->mediumText('default')->change();
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

        Schema::connection($cn)->table('ticketit_settings', function (Blueprint $table) {
            $table->string('value')->change();
            $table->string('default')->change();
        });
    }
}
