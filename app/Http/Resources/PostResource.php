<?php

namespace App\Http\Resources;

use Cache;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin Post
 */
class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            // Fields
            'id' => $this->id,
            'slug' => $this->slug,
            'title' => $this->title,
            'content' => $this->content,
            'updated_at' => $this->updated_at,
            'created_at' => $this->created_at,
            'description' => $this->description,

            // Relationships
            'user' => $this->whenLoaded('user'),
            'images' => $this->whenLoaded('images'),
            'comments' => $this->whenLoaded('comments'),
            'reactions' => $this->whenLoaded('reactions'),
            'categories' => $this->whenLoaded('categories'),

            // Counts
            'comment_count' => $this->whenCounted('comments'),

            // Aggregates
            'reaction_agg' => Cache::remember(
                'reaction_agg_' . $this->id,
                now()->addHours(6),
                fn () => $this->reactions()
                    ->selectRaw('type, count(*) as count')
                    ->groupBy('type')
                    ->get()
                    ->map(function ($item) {
                        return [
                            'label' => $item->type->name,
                            'count' => $item->count,
                        ];
                    })
                    ->sortByDesc('count')
                    ->values()
            ),
        ];
    }
}
