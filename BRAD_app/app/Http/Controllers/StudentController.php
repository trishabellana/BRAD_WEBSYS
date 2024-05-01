<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = Student::all();
    

        return response()->json([

            $students,

        ],200);
    }

    /**
     * Show the form for creating a new resource.
     */


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {   
        // $firstname = $request->firstname;
        // $lastname = $request->lastname;

        // $output = array();

        $students = Student::where('firstname',request -> $firstname)
        ->where('lastname',request -> $lastname) ->get();
        
         if (count(students)> 0){
            echo "2";
         } else{
        $student = new Student();
        $student ->firstname = $request->firstname;
        $student ->lastname = $request->lastname;
        $student ->status = $request->status;
        $student ->save();
        echo "1";
        }
        // $student = new Student();

        // $student -> firstname= $request->firstname;
        // $student -> lastname= $request->lastname;
        // $student -> status= $request->status;
        // $student -> save();

        // echo "Succesfully added New Student";      
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $student = Student::find($id);

        return response()->json([
            $student,
            ],200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $student = Student::find($id);
        if ($student) 
        {

        return response()->json([
            $student,
            ],200);

        }
    else
        {
        return response()->json([
            'message' => "Student Does not Exist"
            ],404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $student = Student:: find($id);
        $student ->firstname = $request->firstname;
        $student ->lastname = $request->lastname;
        $student ->status = $request->status;
        $student ->save();

        echo "Succesfully updated Student";            
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $student = Student::find( $id );
        
        $student->delete();
    }
}