<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AlterUsersTable extends Migration
{
    /**
     * Run the migrations.
     * Modificado para usar conexión 'profile' en vez de la por defecto
     * [thekordy/ticketit](https://github.com/thekordy/ticketit)
     *
     * @return void
     */
    public function up()
    {
        // Ticketit connection
        $cn = config('ticketit.users.connection');

        Schema::connection($cn)->table('users', function (Blueprint $table) {
            $table->boolean('ticketit_admin')->default(0);
            $table->boolean('ticketit_agent')->default(0);
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
        $cn = config('ticketit.users.connection');

        Schema::connection($cn)->table('users', function (Blueprint $table) {
            $table->dropColumn(['ticketit_admin', 'ticketit_agent']);
        });
    }
}
