<?php

namespace App\Models;

use Eloquent;
use Database\Factories\ImageFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Carbon;

/**
 * App\Models\Image
 *
 * @property int $id
 * @property string $path
 * @property string $mime_type
 * @property string $hash
 * @property string $filename
 * @property string $imageable_type
 * @property int $imageable_id
 * @property string|null $deleted_at
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Model|Eloquent $imageable
 * @property-read User|null $user
 * @method static ImageFactory factory($count = null, $state = [])
 * @method static Builder|Image newModelQuery()
 * @method static Builder|Image newQuery()
 * @method static Builder|Image query()
 * @method static Builder|Image whereCreatedAt($value)
 * @method static Builder|Image whereDeletedAt($value)
 * @method static Builder|Image whereFilename($value)
 * @method static Builder|Image whereHash($value)
 * @method static Builder|Image whereId($value)
 * @method static Builder|Image whereImageableId($value)
 * @method static Builder|Image whereImageableType($value)
 * @method static Builder|Image whereMimeType($value)
 * @method static Builder|Image wherePath($value)
 * @method static Builder|Image whereUpdatedAt($value)
 * @mixin Eloquent
 */
class Image extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'path',
        'mime_type',
        'hash',
        'filename',
        'imageable_id',
        'imageable_type'
    ];

    /**
     * Get the user that owns the Image
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get all the owning imageable models.
     *
     * @return MorphTo
     * @noinspection PhpUnused
     */
    public function imageable(): MorphTo
    {
        return $this->morphTo();
    }
}
