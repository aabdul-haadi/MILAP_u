import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AddLostPerson } from './pages/lost/AddLostPerson';
import { AddFoundPerson } from './pages/found/AddFoundPerson';
import { Login } from './pages/auth/Login';
import { SignUp } from './pages/auth/SignUp';
import { Database, Users, Link2 } from 'lucide-react';
import { AddPersonAtRisk } from './pages/PersonAtRisk/AddPersonAtRisk';
import { SearchLostPerson } from './pages/lost/SearchLostPerson';
import { UpdateLostPerson } from './pages/lost/UpdateLostPerson';
import { AddFoundCorpse } from './pages/found/AddFoundCorpse';
import { SearchFoundPersonCorpse } from './pages/found/SearchFoundPersonCorpse';
import { UpdateFoundPersonCorpse } from './pages/found/UpdateFoundPersonCorpse';

function HeroSection() {
  return (
    <div className="text-center py-8 md:py-8 bg-gray-50 px-4">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        A Nationwide Initiative By Sindh Police For Collaboration<br className="hidden md:block" />
        In Finding <span className="text-red-600">LOST PERSONS</span>
      </h1>
      <p className="text-gray-600 text-lg md:text-xl">
        Bridging Gaps Across Provinces: A Collaborative Effort To Reunite Families And Bring Hope
      </p>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row md:items-center mb-4">
        <Icon className="w-12 h-12 text-blue-600 mb-4 md:mb-0" />
        <h3 className="text-xl font-semibold md:ml-4">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function SystemFeatures() {
  return (
    <div className="bg-gray-100 py-12 md:py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          How Our System Works
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            icon={Database}
            title="Centralized Reporting And Database"
            description="Families, friends, police officials, shelter homes & NGOs can report lost persons through this portal. All information is stored in a centralized database as lost person can be found."
          />
          <FeatureCard
            icon={Users}
            title="Advanced Technology Integration"
            description="Utilizing facial recognition systems, Artificial intelligence & data analytics the system ensures efficient identification and recovery of lost individuals."
          />
          <FeatureCard
            icon={Link2}
            title="Nationwide Collaboration"
            description="The initiative fosters coordination among law enforcement agencies, organisations & individuals, enabling a convenient approach to locating and reuniting lost persons with their families."
          />
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isLoggedIn={false} username="" onLogout={() => {}} />
      <HeroSection />
      <SystemFeatures />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />  {/* Uncommented SignUp Route */}
        
        {/* Lost Person Routes */}
        <Route path="/lost/add" element={<AddLostPerson />} />
        <Route path="/lost/search" element={<SearchLostPerson />} />
        <Route path="/lost/update" element={<UpdateLostPerson />} />

        {/* Found Person Routes */}
        <Route path="/found/add-person" element={<AddFoundPerson />} />
        <Route path="/found/add-corpse" element={<AddFoundCorpse />} />
        <Route path="/found/search" element={<SearchFoundPersonCorpse />} />
        <Route path="/found/update" element={<UpdateFoundPersonCorpse />} />

        {/* Person At Risk Routes */}
        <Route path="/person-at-risk" element={<AddPersonAtRisk />} />
      </Routes>
    </Router>
  );
}

export default App;
