import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services'; 
import Team from './pages/Team';         

const About = () => <div className="p-8 text-center min-h-[500px] flex items-center justify-center bg-gray-100"><h1 className="text-3xl font-bold text-indigo-700">About Page Content</h1></div>;
const Contact = () => <div className="p-8 text-center min-h-[500px] flex items-center justify-center bg-gray-100"><h1 className="text-3xl font-bold text-indigo-700">Contact Page Content</h1></div>;

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        
        {/* Navbar is the fixed vertical sidebar */}
        <Navbar />

        {/* Main Layout Container: ml-[18rem] shifts the content right to clear the new 18rem wide Navbar */}
        <div className="flex flex-col flex-grow ml-[18rem]"> 
          
          <main className="flex-grow">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} /> 
              <Route path="/team" element={<Team />} />       
            </Routes>
          </main>
          
          <Footer />
          
        </div>
        
      </div>
    </Router>
  );
}


