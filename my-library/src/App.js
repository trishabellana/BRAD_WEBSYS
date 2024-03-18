import logo from './logo.svg';
import './App.css';
import StudentPage from './Component/Student/Student Page/StudentPage';

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
  
   </>
  );
}

export default App;
