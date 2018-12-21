<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddHtmlcontentToTicketitAndComments extends Migration
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
            $table->longText('html')->nullable()->after('content');
        });

        Schema::connection($cn)->table('ticketit_comments', function (Blueprint $table) {
            $table->longText('html')->nullable()->after('content');
            $table->longText('content')->change();
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
            $table->dropColumn('html');
        });

        Schema::connection($cn)->table('ticketit_comments', function (Blueprint $table) {
            $table->dropColumn('html');
            $table->text('content')->change();
        });
    }
}
