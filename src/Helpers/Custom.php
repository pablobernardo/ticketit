<?php

namespace Kordy\Ticketit\Helpers;

class Custom
{
    /**
     * Get environment values from custom or generic env() function
     *
     * @param string $key
     * @param string $value
     * @return string
     */
    public static function env($key, $value = false)
    {
        return function_exists('custom_env') ? custom_env($key, $value) : env($key, $value);
    }
}
