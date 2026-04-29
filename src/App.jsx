import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FriendDetail from './pages/FriendDetails';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/friend/:id" element={<FriendDetail />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
