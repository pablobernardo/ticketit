<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddCompletedAtColumnToTicketitTable extends Migration
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

        Schema::connection($cn)->table('ticketit', function (Blueprint $table) {
            $table->timestamp('completed_at')->nullable();
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

        Schema::connection($cn)->table('ticketit', function (Blueprint $table) {
            $table->dropColumn('completed_at');
        });
    }
}
