import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nomatch from './components/shared/Nomatch';
import Subs from './components/subs/Subs';
import MainNavbar from './components/shared/MainNavbar';

// incharge naviational routes, 
// define pages using react router

const App = () => (
  <>
    {/* display our nav on each page on the top */}
    <MainNavbar />
    {/* where we are having our pages */}
    <Routes>
      {/* Route for each page, url path to get there, element, component to show the page */}
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/subs' element={<Subs />} />
      {/* if the page or url does not exist then go to the nomatch */}
      <Route path='/*' element={<Nomatch />} />
    </Routes>
    {/* Footer */}
  </>
)

export default App;
