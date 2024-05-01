<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Books;
use App\Models\Borrowed;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class BorrowedController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $borroweds = Borrowed::all();
    

        return response()->json([

            $borroweds,

        ],200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
   

    public function store(Request $request)
    {

        $student_id = $request->input('student_id');
        $book_id = $request->input('book_id');

        // Find the student and book
        $students = Student::findOrFail($student_id);
        $books = Book::findOrFail($book_id);

        // Create a new borrowed instance
        $Borrowed = new Borrowed;
        $Borrowed->Student_Name = "{$student->firstname} {$student->lastname}";
        $Borrowed->Book_Name = $book->book_name;

        // Set the Date_Borrowed field to the current date and time
        $Borrowed->Date_Borrowed = Carbon::now();

        // Save the borrowed instance
        $Borrowed->save();

        echo "added";
    
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $student = Borrowed::join('students', 'students.id', '=', 'borroweds.student_id')
    ->join('books', 'borroweds.book_id', '=', 'books.id')
    ->select('borroweds.id', 'students.firstname', 'students.lastname', 'books.book_name', 'books.description')
    ->where('borroweds.id', '=', $id)->first();

    if ($student) {
            echo $student;
    } else {
             echo "Student not found.";
            }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $borrowed = Borrowed::find($id);
        $borrowed -> status= $request->status;
        $borrowed -> save();

        echo "Book Returned";   
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    
}
