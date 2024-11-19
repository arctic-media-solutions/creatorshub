<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use JoelButcher\Socialstream\HasConnectedAccounts;
use Laravel\Sanctum\HasApiTokens;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Permission\Traits\HasRoles;
use Lab404\Impersonate\Models\Impersonate;
use Overtrue\LaravelLike\Traits\Liker;
use Overtrue\LaravelLike\Traits\Likeable;
use Overtrue\LaravelFollow\Traits\Follower;
use Overtrue\LaravelFollow\Traits\Followable;
use Overtrue\LaravelSubscribe\Traits\Subscriber;
use Overtrue\LaravelSubscribe\Traits\Subscribable;
use Overtrue\LaravelVote\Traits\Voter;
use Overtrue\LaravelVote\Traits\Votable;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

class User extends Authenticatable implements HasMedia, MustVerifyEmail
{
    use HasFactory;
    use HasConnectedAccounts;
    use Notifiable;
    use HasApiTokens;
    use HasRoles;
    use InteractsWithMedia;
    use Impersonate;
    use Liker;
    use Likeable;
    use Follower;
    use Followable;
    use Subscriber;
    use Subscribable;
    use Voter;
    use LogsActivity;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'username',
        'bio',
        'avatar',
        'cover_image',
        'social_links',
        'settings',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'social_links' => 'array',
            'settings' => 'array',
        ];
    }

    /**
     * Configure the Activity Log options for this model
     */
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnly([
                'name',
                'email',
                'username',
                'bio',
                'avatar',
                'cover_image',
                'social_links'
            ])
            ->logOnlyDirty()
            ->dontSubmitEmptyLogs();
    }

    /**
     * Get the default avatar for the user.
     */
    public function getDefaultAvatarUrl(): string
    {
        return 'https://ui-avatars.com/api/?name='.urlencode($this->name).'&color=7F9CF5&background=EBF4FF';
    }

    /**
     * Register the media collections for the user
     */
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('avatar')
            ->singleFile()
            ->useFallbackUrl($this->getDefaultAvatarUrl());

        $this->addMediaCollection('cover')
            ->singleFile();
    }
}
