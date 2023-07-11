<?php

namespace App\Console\Commands;

use App\Models\Category;
use App\Models\Post;
use Exception;
use Illuminate\Console\Command;
use Symfony\Component\Console\Command\Command as CommandAlias;

class TestCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:dev';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'A command for running various dev/debug commands used by the dev team.';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $category = Category::query()->inRandomOrder()->first();
        $post = Post::query()->inRandomOrder()->first();

        try {
            $post->categories()->attach($category->id);
        } catch (Exception $e) {
            $this->error($e->getMessage());
        }

        return CommandAlias::SUCCESS;
    }
}
