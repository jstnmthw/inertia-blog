<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Route;

class PostController extends Controller
{

    public function index($slug): Response
    {
        $post = new PostResource(
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
                ->where('slug', $slug)
                ->firstOrFail()
        );

        return Inertia::render('Post/Show', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'post' => $post,
        ]);
    }

}
