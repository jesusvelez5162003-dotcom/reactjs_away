import React from 'react';

const HomeTab = ({ setActiveTab }) => {
  return (
    <div className="home-tab-container animate-fade-in">
      {/* Hero Cover Section with CRT Scanlines */}
      <section className="hero-section crt-effect" style={{ backgroundImage: "url('/fondo.svg')" }}>
        <div className="hero-overlay"></div>
        <div className="riot-container hero-content">
          <span className="hero-pretitle">PIXEL NOVA STUDIO — AVENTURA PIXEL ART</span>
          <h1 className="hero-title">AWAY</h1>
          <p className="hero-subtitle">
            Un niño pequeño perdido en un mundo silencioso. Ruinas de una civilización olvidada, máquinas que aún vigilan y una extraña energía verde que palpita en la oscuridad. ¿Encontrará el camino de regreso?
          </p>
          <div className="hero-actions">
            <button 
              className="riot-btn riot-btn-accent hero-btn"
              onClick={() => setActiveTab('registro')}
            >
              REGÍSTRATE A LA BETA
            </button>
            <button 
              className="riot-btn riot-btn-outline hero-btn secondary"
              onClick={() => setActiveTab('presentacion')}
            >
              CONOCE EL JUEGO
            </button>
          </div>
        </div>
        
        {/* Decorative scanline grids */}
        <div className="hero-corner-decor-tl"></div>
        <div className="hero-corner-decor-br"></div>
      </section>

      {/* Game Highlights Section */}
      <section className="highlights-section">
        <div className="riot-container">
          <div className="section-header text-center">
            <div className="riot-title-wrapper">
              <h2 className="riot-title">EL MISTERIO DE AWAY</h2>
              <div className="riot-title-bg"></div>
            </div>
            <p className="section-desc">
              Inspirado en los clásicos modernos de suspenso y plataformas como Limbo, Inside y Little Nightmares. AWAY te sumerge en una aventura muda donde el entorno cuenta la historia.
            </p>
          </div>

          <div className="features-grid">
            <div className="riot-card feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>NARRATIVA AMBIENTAL</h3>
              <p>
                Sin diálogos ni textos explicativos. La historia se despliega a través de los escenarios pixelados, el sonido atmosférico y el comportamiento de las criaturas que acechan.
              </p>
            </div>

            <div className="riot-card feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>PUZZLES Y SIGILO</h3>
              <p>
                Eres pequeño y vulnerable. No tienes armas para combatir a los gigantes de acero. Usa las sombras para esconderte, trepa por cables y resuelve acertijos para avanzar.
              </p>
            </div>

            <div className="riot-card feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>MUNDO BIOLUMINISCENTE</h3>
              <p>
                Guíate por el brillo del Éter verde. Este misterioso elemento no solo ilumina tu camino en la niebla, sino que reacciona a los mecanismos antiguos y altera la gravedad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="cta-bar-section">
        <div className="riot-container cta-bar-content">
          <div className="cta-text">
            <h2>Únete a las pruebas de juego</h2>
            <p>El estudio <strong>Pixel Nova</strong> te invita a suscribirte para recibir alertas de la Demo Técnica y ser de los primeros en explorar las sombras de AWAY.</p>
          </div>
          <button 
            className="riot-btn riot-btn-accent"
            onClick={() => setActiveTab('registro')}
          >
            REGISTRARME
          </button>
        </div>
      </section>

      <style>{`
        .home-tab-container {
          width: 100%;
        }

        /* Hero Styling */
        .hero-section {
          position: relative;
          height: calc(100vh - var(--header-height));
          min-height: 600px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          color: var(--text-on-dark);
          overflow: hidden;
        }

        /* CRT Scanlines Overlay */
        .crt-effect::after {
          content: " ";
          display: block;
          position: absolute;
          top: 0; left: 0; bottom: 0; right: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.3) 50%);
          z-index: 2;
          background-size: 100% 4px;
          pointer-events: none;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, rgba(11, 19, 14, 0.9) 35%, rgba(11, 19, 14, 0.5) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          max-width: 750px;
        }

        .hero-pretitle {
          font-family: var(--font-header);
          font-weight: 800;
          font-size: 0.9rem;
          color: var(--accent-bright);
          letter-spacing: 0.25em;
          display: block;
          margin-bottom: 1rem;
        }

        .hero-title {
          font-size: 6.5rem;
          font-weight: 900;
          letter-spacing: 0.15em;
          line-height: 0.9;
          margin-bottom: 1.5rem;
          color: #ffffff;
          filter: drop-shadow(0 0 15px rgba(16, 185, 129, 0.5));
        }

        .hero-subtitle {
          font-size: 1.15rem;
          line-height: 1.8;
          color: var(--text-light);
          margin-bottom: 2.5rem;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .hero-btn {
          min-width: 200px;
        }

        .hero-btn.secondary {
          color: white;
        }
        .hero-btn.secondary::before {
          border-color: white;
        }
        .hero-btn.secondary:hover {
          color: var(--text-primary);
        }
        .hero-btn.secondary:hover::after {
          background-color: white;
        }

        /* Hero Corner Decor elements */
        .hero-corner-decor-tl {
          position: absolute;
          top: 40px;
          left: 40px;
          width: 100px;
          height: 100px;
          border-top: 3px solid rgba(255, 255, 255, 0.1);
          border-left: 3px solid rgba(255, 255, 255, 0.1);
          pointer-events: none;
          z-index: 3;
        }

        .hero-corner-decor-br {
          position: absolute;
          bottom: 40px;
          right: 40px;
          width: 100px;
          height: 100px;
          border-bottom: 3px solid var(--accent-glow);
          border-right: 3px solid var(--accent-glow);
          pointer-events: none;
          z-index: 3;
        }

        /* Highlights Section */
        .highlights-section {
          padding: 7rem 0;
          background-color: var(--bg-secondary);
        }

        .section-header {
          max-width: 700px;
          margin: 0 auto 5rem auto;
          text-align: center;
        }

        .section-desc {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-top: 1rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        .feature-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          background-color: var(--bg-secondary);
          color: var(--accent-color);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          border: 1.5px solid var(--border-color);
          transition: var(--transition-fast);
        }

        .feature-card:hover .feature-icon {
          color: var(--bg-primary);
          background-color: var(--accent-color);
          border-color: var(--accent-color);
          box-shadow: 0 0 15px var(--accent-glow);
        }

        .feature-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .feature-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .feature-icon svg {
          width: 28px;
          height: 28px;
        }

        /* Call To Action Bar */
        .cta-bar-section {
          padding: 4rem 0;
          background: linear-gradient(135deg, var(--bg-dark-contrast) 0%, #0d1e13 100%);
          color: #ffffff;
          border-top: 3px solid var(--accent-color);
        }

        .cta-bar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .cta-text h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .cta-text p {
          color: var(--text-light);
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 4rem;
          }
          
          .hero-section {
            height: auto;
            padding: 6rem 0;
          }

          .cta-bar-content {
            flex-direction: column;
            text-align: center;
          }
          
          .cta-bar-content button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeTab;
