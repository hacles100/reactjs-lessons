import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/about/AboutUs';
import Contact from './pages/contact/Contact';
import Home from './pages/homepage/Home';
import Layout from './pages/layout/Layout';
import NotFound from './pages/not-found/NotFound';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
