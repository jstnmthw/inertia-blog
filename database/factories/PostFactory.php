<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Post>
 */
class PostFactory extends Factory
{

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory()->create()->getKey(),
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph(5),
            'slug' => $this->faker->slug,
            'content' => $this->faker->paragraphs(3, true),
        ];
    }

}
