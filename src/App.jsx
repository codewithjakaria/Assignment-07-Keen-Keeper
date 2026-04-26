import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
        
          <Route path="/" element={<Home />} />

        
          <Route
            path="/timeline"
            element={
              <div className="p-10 text-center">Timeline Coming Soon</div>
            }
          />
          <Route
            path="/stats"
            element={<div className="p-10 text-center">Stats Coming Soon</div>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
