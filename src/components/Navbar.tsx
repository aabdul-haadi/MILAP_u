import React, { useState } from 'react';
import { Database, User, LogOut, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isLoggedIn: boolean;
  username: string;
  onLogout: () => void;
  transparent?: boolean;
}

export function Navbar({ isLoggedIn, username, onLogout, transparent = false }: NavbarProps) {
  const [lostPersonsOpen, setLostPersonsOpen] = useState(false);
  const [foundPersonsOpen, setFoundPersonsOpen] = useState(false);
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navbarClass = transparent 
  ? "bg-[#1a1a1a] bg-opacity-80 backdrop-blur-sm text-white py-6 px-4"
  : "bg-[#1a1a1a] text-white py-6 px-4";

  // const closeAllDropdowns = () => {
  //   setLostPersonsOpen(false);
  //   setFoundPersonsOpen(false);
  //   setQuickLinksOpen(false);
  // };

  return (
   <nav className={`${navbarClass} h-40`} style={transparent ? {
      backgroundImage: 'url("https://media.licdn.com/dms/image/v2/D4D16AQFZYNGdPM4yXw/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1671706682105?e=2147483647&v=beta&t=zfb9QWgF_qOgBSMUO7adzeXYF85hVK2-jv5ZhEHVPSY")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'overlay'
    } : {}}>

      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            {/* <Database className="text-green-500" size={32} /> */}
          <div className="flex flex-col items-center">
  <div className="text-3xl font-bold tracking-wide">
    <span className="text-white">MI</span>
    <span className="text-green-500">LAP</span>
  </div>
  <div className="text-xs text-gray-300 text-center leading-tight">
    Mutual Integration For <br /> Locating At Risk Persons
  </div>
</div>
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="hover:text-green-500">Home</Link>
            
            <div className="relative">
              <button 
                onClick={() => {
                  setLostPersonsOpen(!lostPersonsOpen);
                  setFoundPersonsOpen(false);
                  setQuickLinksOpen(false);
                }}
                className="hover:text-green-500"
              >
                Lost Persons
              </button>
              {lostPersonsOpen && (
                <div className="absolute z-10 mt-2 w-60 bg-white rounded-md shadow-lg py-1 text-black">
                  <Link to="/lost/add" className="block px-4 py-2 hover:bg-gray-100">Add a Lost Person</Link>
                  <Link to="/lost/search" className="block px-4 py-2 hover:bg-gray-100">Search Among Lost Persons</Link>
                  <Link to="/lost/update" className="block px-4 py-2 hover:bg-gray-100">Update Among Lost Persons</Link>
                  </div>
              )}

              
            </div>

            <div className="relative">
              <button 
                onClick={() => {
                  setFoundPersonsOpen(!foundPersonsOpen);
                  setLostPersonsOpen(false);
                  setQuickLinksOpen(false);
                }}
                className="hover:text-green-500"
              >
                Found Persons / Corpses
              </button>
              {foundPersonsOpen && (
                <div className="absolute z-10 mt-2 w-60 bg-white rounded-md shadow-lg py-1 text-black">
                <Link to="/found/add-person" className="block px-4 py-2 hover:bg-gray-100">Add a Found Person</Link>
                <Link to="/found/add-corpse" className="block px-4 py-2 hover:bg-gray-100">Add a Found Corpse</Link>
                <Link to="/found/search" className="block px-4 py-2 hover:bg-gray-100">Search Among Found Persons/Corpses</Link>
              
              
                 {/* Add the new update link here */}
          <Link to="/found/update" className="block px-4 py-2 hover:bg-gray-100">Update Found Person/Corpse Details</Link>
                </div>
              )}
            </div>

            <Link to="/person-at-risk/" className="hover:text-green-500">Add a Person at Risk</Link>

<div className="relative">
  <button
    onClick={() => {
      setQuickLinksOpen(!quickLinksOpen);
      setLostPersonsOpen(false);
      setFoundPersonsOpen(false);
    }}
    className="hover:text-green-500 text-sm"
  >
    Quick Links
  </button>
  {quickLinksOpen && (
    <div className="absolute z-10 mt-2 w-64 bg-white rounded-md shadow-lg py-2 text-black">
      {/* Law Enforcement Organizations Section */}
      <div className="flex flex-col px-3 py-2 border-b border-gray-200">
        <strong className="block text-black text-xs">Law Enforcement Organizations</strong>
        <div className="flex flex-col space-y-1">
          <a
            href="https://www.sindhpolice.gov.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs px-2 py-1 hover:bg-gray-100"
          >
            Sindh Police
          </a>
          <a
            href="https://www.punjabpolice.gov.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs px-2 py-1 hover:bg-gray-100"
          >
            Punjab Police
          </a>
          <a
            href="https://www.kppolice.gov.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs px-2 py-1 hover:bg-gray-100"
          >
            KPK Police
          </a>
          <a
            href="https://www.balochistanpolice.gov.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs px-2 py-1 hover:bg-gray-100"
          >
            Balochistan Police
          </a>
        </div>
      </div>

      {/* NGOs Section */}
      <div className="flex flex-col px-3 py-2 border-b border-gray-200">
        <strong className="block text-black text-xs">NGOs</strong>
        <div className="flex flex-col space-y-1">
          <a
            href="https://edhi.org"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs px-2 py-1 hover:bg-gray-100"
          >
            Edhi Foundation
          </a>
          <a
            href="https://www.chipsfoundation.org"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs px-2 py-1 hover:bg-gray-100"
          >
            CHIPS Foundation
          </a>
          <a
            href="https://jdcwelfare.org"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs px-2 py-1 hover:bg-gray-100"
          >
            JDC Foundation
          </a>
          <a
            href="https://saylaniwelfare.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs px-2 py-1 hover:bg-gray-100"
          >
            Saylani Welfare
          </a>
        </div>
      </div>

      {/* Shelter Homes Section */}
      <div className="flex flex-col px-3 py-2">
        <strong className="block text-black text-xs">Shelter Homes</strong>
        <div className="flex flex-col space-y-1">
          <a
            href="https://www.edhi.org"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs px-2 py-1 hover:bg-gray-100"
          >
            Edhi Old Home
          </a>
          <a
            href="https://www.aghoshhomes.org"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs px-2 py-1 hover:bg-gray-100"
          >
            Aghosh Homes
          </a>
        </div>
      </div>
    </div>
  )}
</div>


            <Link to="/directory" className="hover:text-green-500">Directory</Link>

            <div className="flex items-center space-x-2">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center">
                    <User className="w-8 h-8 bg-gray-300 rounded-full p-1" />
                    <span className="ml-2">Welcome {username}</span>
                    <button onClick={onLogout} className="ml-4 flex items-center text-red-500 hover:text-red-600">
                      <LogOut className="w-4 h-4 mr-1" />
                      LOGOUT
                    </button>
                  </div>
                </>
              ) : (
                <Link to="/login" className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-green-500">Home</Link>
              
              <button 
                onClick={() => setLostPersonsOpen(!lostPersonsOpen)}
                className="text-left hover:text-green-500"
              >
                Lost Persons
              </button>
              {lostPersonsOpen && (
                <div className="pl-4 space-y-2">
                  <Link to="/lost/add" className="block hover:text-green-500">Add a Lost Person</Link>
                  <Link to="/lost/search" className="block hover:text-green-500">Search Among Lost Persons</Link>
                  <Link to="/lost/update" className="block hover:text-green-500">Update Among Lost Persons</Link>
                </div>
              )}

              <button 
                onClick={() => setFoundPersonsOpen(!foundPersonsOpen)}
                className="text-left hover:text-green-500"
              >
                Found Persons / Corpses
              </button>
              {foundPersonsOpen && (
                <div className="pl-4 space-y-2">
                  <Link to="/found/add-person" className="block hover:text-green-500">Add a Found Person</Link>
                  <Link to="/found/add-corpse" className="block hover:text-green-500">Add a Found Corpse</Link>
                  <Link to="/found/search" className="block hover:text-green-500">Search Among Found Persons/Corpses</Link>
                  <Link to="/found/update" className="block hover:text-green-500">Update Found Person/Corpse Details</Link>
                </div>
              )}

              <Link to="/person-at-risk" className="hover:text-green-500">Add a Person at Risk</Link>

              <button 
                onClick={() => setQuickLinksOpen(!quickLinksOpen)}
                className="text-left hover:text-green-500"
              >
                Quick Links
              </button>
              {quickLinksOpen && (
                <div className="pl-4 space-y-2">
                  <a href="https://edhi.org" target="_blank" rel="noopener noreferrer" className="block hover:text-green-500">Edhi Foundation</a>
                  <a href="https://www.chipsfoundation.org" target="_blank" rel="noopener noreferrer" className="block hover:text-green-500">CHIPS Foundation</a>
                  <a href="https://jdcwelfare.org" target="_blank" rel="noopener noreferrer" className="block hover:text-green-500">JDC Foundation</a>
                  <a href="https://saylaniwelfare.com" target="_blank" rel="noopener noreferrer" className="block hover:text-green-500">Saylani Welfare</a>
                </div>
              )}

              <Link to="/directory" className="hover:text-green-500">Directory</Link>

              {isLoggedIn ? (
                <div className="space-y-2">
                  <div className="flex items-center">
                    <User className="w-8 h-8 bg-gray-300 rounded-full p-1" />
                    <span className="ml-2">Welcome {username}</span>
                  </div>
                  <button onClick={onLogout} className="flex items-center text-red-500 hover:text-red-600">
                    <LogOut className="w-4 h-4 mr-1" />
                    LOGOUT
                  </button>
                </div>
              ) : (
                <Link to="/login" className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full justify-center">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}