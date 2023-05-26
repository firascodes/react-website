import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/services' exact Component={Services} />
          <Route path='/products' exact Component={Products} />
          <Route path='/sign-up' exact Component={SignUp} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
