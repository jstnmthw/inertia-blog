<?php

namespace App\Models;

use Eloquent;
use App\Enums\ReactionTypes;
use Database\Factories\ReactionFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * App\Models\Reaction
 *
 * @property int $id
 * @property ReactionTypes $type
 * @property int $user_id
 * @property int $reactionable_id
 * @property string $reactionable_type
 * @property string $created_at
 * @property string $updated_at
 * @property-read string $label
 * @property-read User $user
 * @property-read Model $reactionable
 * @property string|null $deleted_at
 * @method static ReactionFactory factory($count = null, $state = [])
 * @method static Builder|Reaction newModelQuery()
 * @method static Builder|Reaction newQuery()
 * @method static Builder|Reaction query()
 * @method static Builder|Reaction whereCreatedAt($value)
 * @method static Builder|Reaction whereDeletedAt($value)
 * @method static Builder|Reaction whereId($value)
 * @method static Builder|Reaction whereReactionableId($value)
 * @method static Builder|Reaction whereReactionableType($value)
 * @method static Builder|Reaction whereType($value)
 * @method static Builder|Reaction whereUpdatedAt($value)
 * @method static Builder|Reaction whereUserId($value)
 * @mixin Eloquent
 */
class Reaction extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'type',
        'user_id',
        'reactionable_id',
        'reactionable_type'
    ];

    /**
     * The attributes that should be appended.
     *
     * @var array<string, string>
     */
    protected $appends = [
        'label'
    ];

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'type' => ReactionTypes::class,
        'created_at' => 'datetime:d-m-Y H:i',
    ];

    /**
     * Get the user that owns the Reaction
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get all the owning reactionable models.
     *
     * @return MorphTo
     * @noinspection PhpUnused
     */
    public function reactionable(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * Get the reaction's label.
     *
     * @return Attribute
     */
    public function label(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->type,
        )->shouldCache();
    }

}
