<?php

namespace Kordy\Ticketit\Seeds;

use Illuminate\Database\Seeder;
use Kordy\Ticketit\Models\Setting;

class SettingsTableSeeder extends Seeder
{
    public $config = [];

    /**
     * Seed the Plans table.
     */
    public function run()
    {
        $defaults = [];

        $defaults = $this->cleanupAndMerge($this->getDefaults(), $this->config);

        foreach ($defaults as $slug => $column) {
            $setting = Setting::bySlug($slug);

            if ($setting->count()) {
                $setting->first()->update([
                    'default' => $column,
                ]);
            } else {
                Setting::create([
                    'lang'    => null,
                    'slug'    => $slug,
                    'value'   => $column,
                    'default' => $column,
                ]);
            }
        }
    }

    /**
     * Takes config/ticketit.php, merge with package defaults, and returns serialized array.
     *
     * @param $defaults
     * @param $config
     *
     * @return array
     */
    public function cleanupAndMerge($defaults, $config)
    {
        $merged = array_merge($defaults, $config);

        foreach ($merged as $slug => $column) {
            if (is_array($column)) {
                foreach ($column as $key => $value) {
                    if ($value == 'yes') {
                        $merged[$slug][$key] = true;
                    }

                    if ($value == 'no') {
                        $merged[$slug][$key] = false;
                    }
                }

                $merged[$slug] = serialize($merged[$slug]);
            }

            if ($column == 'yes') {
                $merged[$slug] = true;
            }

            if ($column == 'no') {
                $merged[$slug] = false;
            }
        }

        return (array) $merged;
    }

    /**
     * Defaults from config file
     * @return [type] [description]
     */
    public function getDefaults()
    {
        return config('ticketit.defaults');
    }
}
