<?php

namespace App\Http\Controllers\Student;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\StudentModel;
use Validator;
class StudentController extends Controller
{
    public function student(){
        return response()->json(StudentModel::get(), 200);
    }
    public function studentByID($id){
        $student = StudentModel::find($id);
        if(is_null($student)){
        return response()->json(["message" => "Student Not Fount"] ,404);
        }
        return response()->json(StudentModel::find($id), 200);
    }
    public function studentSave(Request $request){
        $rules = [
            'Full_Name' => 'required|min:4',
            'class' => 'required|min:2',
            'grade' => 'required|min:1|max:3'
        ];
        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()){
            return response()->json($validator->errors(),400);
        }
        
        $student = StudentModel::create($request->all());
        return response()->json($student,201);
    }

    public function studentUpdate(Request $request, $id){
        $student = StudentModel::find($id);
        if(is_null($student)){
            return response()->json(["message" => "Student Not Fount"] ,404);
        }
        $student->update($request->all());
        return response()->json($student,200);

    }

    public function studentDelete(Request $request, $id ){
        $student = StudentModel::find($id);
        if(is_null($student)){
            return response()->json(["message" => "Student Not Fount"] ,404);
        }
        $student->delete();
        return response()->json(null,204);
    }

}
