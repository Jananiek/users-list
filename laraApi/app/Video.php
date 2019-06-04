<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{

    /**
     * Get owner of a specific video
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
