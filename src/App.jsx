import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeTab from './components/HomeTab';
import StoryTab from './components/StoryTab';
import PresentationTab from './components/PresentationTab';
import GalleryTab from './components/GalleryTab';
import RegisterTab from './components/RegisterTab';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Synchronize admin login state on mount
  useEffect(() => {
    const loggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    setIsAdminLoggedIn(loggedIn);
  }, [activeTab]);

  const handleAdminLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    setActiveTab('admin-dashboard');
  };

  const handleAdminLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    setIsAdminLoggedIn(false);
    setActiveTab('inicio');
  };

  // Scroll to top on tab change for smoother transition
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  // Determine which tab to render
  const renderActiveTab = () => {
    switch (activeTab) {
      case 'inicio':
        return <HomeTab setActiveTab={setActiveTab} />;
      case 'historia':
        return <StoryTab />;
      case 'presentacion':
        return <PresentationTab />;
      case 'galeria':
        return <GalleryTab />;
      case 'registro':
        return <RegisterTab />;
      case 'admin-login':
        return <AdminLogin onLoginSuccess={handleAdminLoginSuccess} />;
      case 'admin-dashboard':
        return isAdminLoggedIn ? (
          <AdminDashboard onLogout={handleAdminLogout} />
        ) : (
          <AdminLogin onLoginSuccess={handleAdminLoginSuccess} />
        );
      default:
        return <HomeTab setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="App">
      {/* Header Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="app-content">
        {renderActiveTab()}
      </main>

      {/* Footer Branding */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
