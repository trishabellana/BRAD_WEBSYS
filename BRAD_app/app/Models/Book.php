<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $table = 'books';

    public function borrowings()
    {
        return $this->hasMany(Borrowed::class, 'book_id');
    }
}