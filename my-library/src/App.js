
import './App.css';
import StudentPage from './Component/Student/Student Page/StudentPage';
import BookPage from './Component/Book/Book Page/BookPage';
import TransactionPage from './Component/Transaction/Transaction page/TransactionPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
   <BrowserRouter basename="/">

    <Routes>
      <Route path="/" element={<StudentPage />}/>
      <Route path="book" element={<BookPage />}/>
      <Route path="transaction" element={<TransactionPage />}/>
    </Routes>

   </BrowserRouter>


   </>
  );
}

export default App;
