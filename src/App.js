import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Booklist from './Component/Booklist';
import Favroutes from './Component/Favroutes';
import BookDetails from './Component/BookDetails'
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Pagenot from './Component/Pagenot';


function App() {
  return (
    <BrowserRouter>
   
    
    <Navbar/>

   
    <Routes>
      <Route path='/' element={<Booklist/>}/>
      <Route path='/book/:id' element={<BookDetails/>}/>
      <Route path='/favroutes' element={<Favroutes/>}/>
      <Route path='*' element={<Pagenot/>}/>
    </Routes>
    <Footer/>
   
    </BrowserRouter>
   
  );
}

export default App;
