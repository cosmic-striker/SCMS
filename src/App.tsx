import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Students from './components/Students';
import Resources from './components/Resources';
import Reports from './components/Reports';
import { GraduationCap, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-primary-50 to-secondary-50'}`}>
        <nav className={`${isDark ? 'bg-gray-800/90 shadow-lg' : 'bg-white/90 shadow-soft'} backdrop-blur-sm sticky top-0 z-50 transition-all duration-300`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <GraduationCap className={`h-8 w-8 ${isDark ? 'text-primary-400' : 'text-primary-600'} transition-colors duration-300`} />
                  <span className={`ml-2 text-xl font-bold bg-gradient-to-r ${isDark ? 'from-primary-400 to-secondary-400' : 'from-primary-600 to-secondary-600'} text-transparent bg-clip-text transition-colors duration-300`}>
                    SCMS
                  </span>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <NavLink to="/" isDark={isDark}>Dashboard</NavLink>
                  <NavLink to="/students" isDark={isDark}>Students</NavLink>
                  <NavLink to="/resources" isDark={isDark}>Resources</NavLink>
                  <NavLink to="/reports" isDark={isDark}>Reports</NavLink>
                </div>
              </div>
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg ${isDark ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-all duration-300 my-auto`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        <main className="py-6">
          <Routes>
            <Route path="/" element={<Dashboard isDark={isDark} />} />
            <Route path="/students" element={<Students isDark={isDark} />} />
            <Route path="/resources" element={<Resources isDark={isDark} />} />
            <Route path="/reports" element={<Reports isDark={isDark} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isDark: boolean;
}

function NavLink({ to, children, isDark }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));

  return (
    <Link
      to={to}
      className={`border-b-2 ${
        isActive
          ? isDark
            ? 'border-primary-400 text-primary-400'
            : 'border-primary-500 text-primary-700'
          : `border-transparent ${
              isDark
                ? 'text-gray-300 hover:text-primary-400 hover:border-primary-400'
                : 'text-gray-500 hover:text-primary-600 hover:border-primary-300'
            }`
      } inline-flex items-center px-1 pt-1 text-sm font-medium transition-all duration-300`}
    >
      {children}
    </Link>
  );
}

export default App;