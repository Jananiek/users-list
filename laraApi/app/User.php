<?php

namespace App;

use App\Video;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $fillable = ['fname', 'lname'];

    /**
     * all videos for one user
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function videos()
    {
        return $this->hasMany('App\Video', 'user_id');
    }
}
