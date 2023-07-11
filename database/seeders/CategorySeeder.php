<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'title' => 'PHP',
                'slug' => 'php',
            ],
            [
                'title' => 'Laravel',
                'slug' => 'laravel',
            ],
            [
                'title' => 'JavaScript',
                'slug' => 'javascript',
            ],
            [
                'title' => 'Vue.js',
                'slug' => 'vue-js',
            ],
            [
                'title' => 'React.js',
                'slug' => 'react-js',
            ],
            [
                'title' => 'Angular',
                'slug' => 'angular',
            ],
            [
                'title' => 'Node.js',
                'slug' => 'node-js',
            ],
            [
                'title' => 'Docker',
                'slug' => 'docker',
            ],
            [
                'title' => 'Kubernetes',
                'slug' => 'kubernetes',
            ],
            [
                'title' => 'AWS',
                'slug' => 'aws',
            ],
            [
                'title' => 'MySQL',
                'slug' => 'mysql',
            ],
            [
                'title' => 'Redis',
                'slug' => 'redis',
            ]
        ];

        DB::table('categories')->insert($categories);
    }
}
