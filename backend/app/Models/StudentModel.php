<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StudentModel extends Model
{
    protected $table = "students";
    public $timestamps = false;

    protected $fillable = [
        'id',
        'Full_Name',
        'class',
        'grade'
    ];
}
