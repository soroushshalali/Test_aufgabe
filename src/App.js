import logo from './logo.svg';
import './App.css';
import LogoCom from './components/LogoCom';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route , Redirect } from 'react-router-dom'
import Faq from './components/faq/Faq';
import RedirectScreen from './components/redirect/Redirect';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='container' >

        
        <LogoCom />
        <Route path='/' component={Home} exact />
        <Route path='/faq' component={Faq} />
        <Route path='/redirect' component={RedirectScreen} />
        <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
