<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $table = 'students';

    public function borrowings()
    {
        return $this->hasMany(Borrowed::class, 'student_id');
    }
}