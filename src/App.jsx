import './App.css'
import Header from './components/Header/Header';
import Filter from './components/Filter/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Index';
import About from './Pages/About';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Filter />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
