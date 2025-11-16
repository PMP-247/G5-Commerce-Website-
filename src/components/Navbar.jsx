import { Link } from 'react-router-dom';

export default function Navbar() {
 
  const sidebarStyles = "fixed w-[18rem] h-screen bg-[#111827] shadow-2xl shadow-indigo-900/50 z-50 flex flex-col p-8 font-mono";

 
  const linkContainerStyles = "flex flex-col gap-5 mt-10 border-t border-indigo-700 pt-5";
  
  
  const linkBase = "text-lg tracking-wide py-3 px-4 rounded-xl transition duration-300 transform hover:scale-[1.03] shadow-md";
  const linkColor = "text-indigo-200 hover:text-white bg-indigo-900/40 hover:bg-indigo-700/80";

  return (
    <nav className={sidebarStyles}>
      
      {}
      <div className="flex-shrink-0 mb-8 border-b-2 border-indigo-600 pb-4">
        <Link to="/" className="text-4xl font-extrabold text-white">
          <span className="text-indigo-400">GEM</span><span className="text-gray-300">App</span>
        </Link>
        <p className="text-xs text-indigo-400 mt-1 uppercase tracking-[0.2em]">Framework Base</p>
      </div>
      
      {}
      <div className={linkContainerStyles}> 
        
        {}
        <Link to="/" className={`${linkBase} ${linkColor}`}>
          01. Home Anchor
        </Link>
        <Link to="/about" className={`${linkBase} ${linkColor}`}>
          02. About Gateway
        </Link>
        <Link to="/contact" className={`${linkBase} ${linkColor}`}>
          03. Contact Nexus
        </Link>
        <Link to="/services" className={`${linkBase} ${linkColor}`}>
          04. Services Grid
        </Link>
        <Link to="/team" className={`${linkBase} ${linkColor}`}>
          05. Team Module
        </Link>
        
      </div>
    </nav>
  );
}