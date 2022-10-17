import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../pages/components/navbar/nav';
import Home from '../pages/home/home';
import About from '../pages/sobre/about';
import Social from '../pages/social/social';
import Contact from '../pages/contato/contact';

function Rota () {
  return (
    <Router>
      <div style={{display: 'flex'}}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/social' element={<Social />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}
export default Rota;