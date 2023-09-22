import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header, Footer } from './components'
import { Home, Contact, Cart, Order, Admin } from './pages'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/order' element={ <Order /> } />
          <Route path='/Admin' element={ <Admin /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
