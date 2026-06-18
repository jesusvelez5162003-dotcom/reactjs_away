import React from 'react';

const Footer = ({ setActiveTab }) => {
  return (
    <footer className="riot-footer">
      <div className="riot-container footer-content animate-fade-in">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand" onClick={() => setActiveTab('inicio')}>
            <img src="/logo.png" alt="AWAY Logo" className="footer-logo" />
            <div className="footer-brand-text-group">
              <span className="footer-brand-name">AWAY</span>
              <span className="footer-brand-studio">by Pixel Nova</span>
            </div>
          </div>

          <div className="footer-socials">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-wrapper" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon-wrapper" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-wrapper" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Middle Navigation Links */}
        <div className="footer-links-grid">
          <div className="footer-nav-col">
            <h4>Juego</h4>
            <ul>
              <li onClick={() => setActiveTab('inicio')}>Inicio</li>
              <li onClick={() => setActiveTab('historia')}>Historia</li>
              <li onClick={() => setActiveTab('presentacion')}>Presentación</li>
              <li onClick={() => setActiveTab('galeria')}>Galería</li>
            </ul>
          </div>
          <div className="footer-nav-col">
            <h4>Novedades</h4>
            <ul>
              <li onClick={() => setActiveTab('registro')}>Suscribirse</li>
              <li>Diario del Estudio</li>
              <li>Notas de Desarrollo</li>
              <li>Foro de Discusión</li>
            </ul>
          </div>
          <div className="footer-nav-col">
            <h4>Soporte</h4>
            <ul>
              <li>Centro de Ayuda</li>
              <li>Reportar un Bug</li>
              <li>Contactar al Estudio</li>
              <li>Preguntas Frecuentes</li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Pixel Nova Studio. Todos los derechos reservados. AWAY, el logotipo de AWAY y cualquier marca asociada son propiedad de Pixel Nova Studio. Hecho con ❤️ por un equipo independiente.</p>
          <div className="footer-legal-links">
            <a href="#privacy">Política de Privacidad</a>
            <a href="#terms">Términos de Servicio</a>
            <a href="#cookies">Preferencias de Cookies</a>
          </div>
        </div>
      </div>

      <style>{`
        .riot-footer {
          background-color: var(--bg-dark-contrast);
          color: var(--text-on-dark);
          padding: 5rem 0 3rem 0;
          font-family: var(--font-body);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
        }

        .footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        .footer-logo {
          height: 40px;
          object-fit: contain;
          filter: drop-shadow(0 0 8px var(--accent-glow));
        }

        .footer-brand-text-group {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .footer-brand-name {
          font-family: var(--font-header);
          font-weight: 900;
          font-size: 1.4rem;
          letter-spacing: 0.15em;
          background: linear-gradient(135deg, #ffffff 60%, var(--accent-bright));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-brand-studio {
          font-family: var(--font-header);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent-color);
          margin-top: 3px;
        }

        .footer-socials {
          display: flex;
          gap: 1.2rem;
        }

        .social-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: #17221b;
          color: var(--text-on-dark);
          transition: var(--transition-fast);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .social-icon-wrapper svg {
          width: 20px;
          height: 20px;
        }

        .social-icon-wrapper:hover {
          background-color: var(--accent-color);
          color: var(--bg-dark-contrast);
          box-shadow: 0 0 10px var(--accent-glow);
          transform: translateY(-2px);
        }

        .footer-divider {
          height: 1px;
          background-color: rgba(255, 255, 255, 0.08);
          margin: 3rem 0;
        }

        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 2.5rem;
          margin-bottom: 4rem;
        }

        .footer-nav-col h4 {
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          letter-spacing: 0.1em;
          border-left: 2.5px solid var(--accent-color);
          padding-left: 0.5rem;
        }

        .footer-nav-col ul {
          list-style: none;
        }

        .footer-nav-col li {
          color: var(--text-light);
          font-size: 0.85rem;
          margin-bottom: 0.75rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .footer-nav-col li:hover {
          color: var(--accent-bright);
          padding-left: 4px;
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          font-size: 0.75rem;
          color: #6b7280;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 2rem;
        }

        .footer-bottom p {
          line-height: 1.6;
        }

        .footer-legal-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .footer-legal-links a {
          transition: var(--transition-fast);
        }

        .footer-legal-links a:hover {
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .footer-socials {
            width: 100%;
            justify-content: flex-start;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
