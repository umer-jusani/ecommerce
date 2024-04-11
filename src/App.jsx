import './App.css'
import Header from './components/Header/Header';
import Filter from './components/Filter/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Index';
import About from './Pages/About';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Filter />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>


    </BrowserRouter>
  )
}

export default App
