import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header, Footer } from './components'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
