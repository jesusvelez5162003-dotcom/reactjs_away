import React from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'historia', label: 'Historia' },
    { id: 'presentacion', label: 'Presentación' },
    { id: 'galeria', label: 'Galería' },
    { id: 'registro', label: 'Registro' }
  ];

  return (
    <header className="navbar-header">
      <div className="riot-container nav-container">
        {/* Logo Section */}
        <div className="nav-logo" onClick={() => setActiveTab('inicio')}>
          <img src="/logo.png" alt="AWAY Logo" className="logo-img" />
          <div className="logo-text-group">
            <span className="logo-text">AWAY</span>
            <span className="logo-studio">by Pixel Nova</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link-btn ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.label}
              <span className="active-indicator"></span>
            </button>
          ))}
        </nav>

        {/* CTA and Admin Quick Entry */}
        <div className="nav-actions">
          <button 
            className={`admin-link-btn ${activeTab === 'admin-login' || activeTab === 'admin-dashboard' ? 'active' : ''}`}
            onClick={() => {
              // If already logged in, go straight to dashboard
              const loggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
              setActiveTab(loggedIn ? 'admin-dashboard' : 'admin-login');
            }}
          >
            Admin Portal
          </button>
          <button 
            className="riot-btn riot-btn-accent nav-cta"
            onClick={() => setActiveTab('registro')}
          >
            Únete
          </button>
        </div>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1.5px solid var(--border-color);
          z-index: 100;
          transition: var(--transition-fast);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        .logo-img {
          height: 48px;
          object-fit: contain;
          filter: drop-shadow(0 2px 4px rgba(16, 185, 129, 0.2));
        }

        .logo-text-group {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .logo-text {
          font-family: var(--font-header);
          font-weight: 900;
          font-size: 1.6rem;
          letter-spacing: 0.15em;
          color: var(--text-primary);
          background: linear-gradient(135deg, var(--text-primary) 60%, var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .logo-studio {
          font-family: var(--font-header);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent-color);
          margin-top: 2px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
          height: 100%;
        }

        .nav-link-btn {
          background: none;
          border: none;
          padding: 0;
          height: 100%;
          display: flex;
          align-items: center;
          position: relative;
          font-family: var(--font-header);
          font-weight: 700;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .nav-link-btn:hover {
          color: var(--accent-color);
        }

        .nav-link-btn.active {
          color: var(--text-primary);
        }

        .active-indicator {
          position: absolute;
          bottom: -1.5px;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: var(--accent-color);
          transform: scaleX(0);
          transition: var(--transition-smooth);
        }

        .nav-link-btn.active .active-indicator {
          transform: scaleX(1);
          box-shadow: 0 0 8px var(--accent-glow);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .admin-link-btn {
          background: none;
          border: none;
          font-family: var(--font-header);
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          color: var(--text-light);
          cursor: pointer;
          transition: var(--transition-fast);
          padding: 0.5rem;
          border: 1px solid transparent;
        }

        .admin-link-btn:hover, .admin-link-btn.active {
          color: var(--accent-color);
        }

        .nav-cta {
          padding: 0.6rem 1.5rem;
          font-size: 0.85rem;
        }

        @media (max-width: 900px) {
          .nav-links {
            display: none; /* In a full responsive app we'd make a burger, but we will make it stack nicely or keep it simple */
          }
          
          /* Show links inline but smaller for simpler viewports */
          .nav-container {
            flex-wrap: wrap;
            padding: 0 1rem;
          }
          
          .navbar-header {
            height: auto;
            padding: 0.5rem 0;
            position: relative;
          }
          
          .nav-links {
            display: flex;
            gap: 1rem;
            width: 100%;
            justify-content: center;
            margin-top: 0.5rem;
            height: 40px;
          }
          
          .nav-actions {
            gap: 0.8rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
