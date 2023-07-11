<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\PostCollection;

class HomepageController extends Controller
{
    public function index(): Response
    {
        $posts = new PostCollection(
            Post::with([
                'categories:id,title,slug',
                'user'
            ])
                ->select(
                    'id',
                    'slug',
                    'title',
                    'user_id',
                    'description',
                    'created_at',
                )
                ->withCount('comments')
                ->orderBy('created_at')
                ->paginate(6)
        );

        return Inertia::render('Homepage', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'posts' => $posts,
        ]);
    }
}
