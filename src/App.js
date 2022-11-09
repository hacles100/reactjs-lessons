
import './App.css';
import All from './pages/all/All';
import Videos from './pages/videos/Videos';
import Images from './pages/images/Images';
import Layout from './pages/layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<All />} />
          <Route path="images" element={<Images />} />
          <Route path="videos" element={<Videos />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
