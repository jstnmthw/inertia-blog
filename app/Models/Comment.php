<?php

namespace App\Models;

use Eloquent;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Database\Factories\CommentFactory;

/**
 * App\Models\Comment
 *
 * @property int $id
 * @property int $user_id
 * @property int $post_id
 * @property string $content
 * @property string|null $deleted_at
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Post|null $post
 * @property-read Collection<int, Reaction> $reactions
 * @property-read int|null $reactions_count
 * @property-read User|null $user
 * @method static CommentFactory factory($count = null, $state = [])
 * @method static Builder|Comment newModelQuery()
 * @method static Builder|Comment newQuery()
 * @method static Builder|Comment query()
 * @method static Builder|Comment whereContent($value)
 * @method static Builder|Comment whereCreatedAt($value)
 * @method static Builder|Comment whereDeletedAt($value)
 * @method static Builder|Comment whereId($value)
 * @method static Builder|Comment wherePostId($value)
 * @method static Builder|Comment whereUpdatedAt($value)
 * @method static Builder|Comment whereUserId($value)
 * @mixin Eloquent
 */
class Comment extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'body',
        'user_id',
        'article_id',
        'content'
    ];

    /**
     * Get the user that owns the comment.
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the post that owns the comment.
     * @return BelongsTo
     */
    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class);
    }

    /**
     * Get all the comment's reactions.
     *
     * @return MorphMany
     * @noinspection PhpUnused
     */
    public function reactions(): MorphMany
    {
        return $this->morphMany(Reaction::class, 'reactionable');
    }

}
