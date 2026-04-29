import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FriendDetail from './pages/FriendDetails';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats';
import Notfound from './pages/Notfound';

function PageLoader({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]); 

  if (isLoading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-white fixed inset-0 z-[9999]">
        <div className="w-14 h-14 border-4 border-gray-100 border-t-[#244D3F] rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-400 font-medium tracking-widest uppercase text-[10px]">
          Loading...
        </p>
      </div>
    );
  }

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <PageLoader>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/friend/:id" element={<FriendDetail />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </main>
          <Footer />

          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={true}
            theme="light"
          />
        </div>
      </PageLoader>
    </BrowserRouter>
  );
}

export default App;
