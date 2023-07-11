<?php

namespace Database\Factories;

use App\Enums\ReactionTypes;
use App\Models\Reaction;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Reaction>
 */
class ReactionFactory extends Factory
{

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $reactions = ReactionTypes::getList();
        return [
            'type' => ReactionTypes::from(rand(1, count($reactions))),
            'user_id' => User::factory()->create()->getKey(),
        ];
    }

}
