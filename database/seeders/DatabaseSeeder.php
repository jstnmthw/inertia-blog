<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Comment;
use App\Models\Post;
use App\Models\Reaction;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()
            ->has(
                Post::factory()
                    ->has(
                        Comment::factory()->count(3)
                            ->has(Reaction::factory()->count(3))
                    )
                    ->has(Reaction::factory()->count(10))
                    ->has(Category::factory()->count(3))
                    ->count(15)
            )
            ->count(1)
            ->create([
                'name' => 'Justin Rivera',
                'email' => 'me@justin.ly',
            ]);

    }
}
