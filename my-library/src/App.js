import logo from './logo.svg';
import './App.css';
import StudentPage from './Component/Student/Student Page/StudentPage';
import BookPage from './Component/Book/Book Page/BookPage';

function App() {
  return (
   <>
    <div className="navigation">
      <ul>
        <li><a href="#">Student</a></li>
        <li><a href="#">Book</a></li>
        <li><a href="#">Transaction</a></li>
      </ul>
    </div>
    <StudentPage/>
    <BookPage/>
  
   </>
  );
}

export default App;
