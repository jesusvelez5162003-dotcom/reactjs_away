import React, { useState } from 'react';

const PresentationTab = () => {
  const [activeSpecTab, setActiveSpecTab] = useState('minimum');

  const gameDetails = [
    { label: 'Desarrollador', value: 'Pixel Nova Studio' },
    { label: 'Distribuidor', value: 'Pixel Nova (Autopublicado)' },
    { label: 'Plataforma', value: 'PC (Windows / Linux) y Consolas' },
    { label: 'Motor Gráfico', value: 'Godot Engine (Optimizado para 2D)' },
    { label: 'Género', value: 'Aventura de Misterio, Plataformas y Sigilo' },
    { label: 'Modo de Juego', value: 'Un jugador (Single-player)' }
  ];

  const minSpecs = [
    { component: 'Sistema Operativo', spec: 'Windows 7 / 8 / 10 (64-bit)' },
    { component: 'Procesador (CPU)', spec: 'Intel Core i3-2100 o AMD Athlon II X4 640' },
    { component: 'Memoria (RAM)', spec: '4 GB RAM' },
    { component: 'Tarjeta Gráfica (GPU)', spec: 'Intel HD Graphics 4000 o AMD Radeon Vega 3 (Compatible con DX11)' },
    { component: 'DirectX', spec: 'Versión 11' },
    { component: 'Almacenamiento', spec: '2 GB de espacio disponible (HDD)' }
  ];

  const recSpecs = [
    { component: 'Sistema Operativo', spec: 'Windows 10 / 11 (64-bit)' },
    { component: 'Procesador (CPU)', spec: 'Intel Core i5-4460 o AMD Ryzen 3 1200 o superior' },
    { component: 'Memoria (RAM)', spec: '8 GB RAM' },
    { component: 'Tarjeta Gráfica (GPU)', spec: 'NVIDIA GTX 750 Ti o AMD Radeon RX 550 (2 GB VRAM)' },
    { component: 'DirectX', spec: 'Versión 11' },
    { component: 'Almacenamiento', spec: '2 GB de espacio disponible (SSD)' }
  ];

  return (
    <div className="presentation-tab-container riot-container animate-fade-in">
      {/* Game Details Section */}
      <section className="details-section">
        <div className="riot-title-wrapper">
          <h2 className="riot-title">DETALLES DEL JUEGO</h2>
          <div className="riot-title-bg"></div>
        </div>

        <div className="details-grid">
          {/* Left: General Info Card */}
          <div className="details-card-wrapper">
            <div className="riot-card details-info-card">
              <h3>Ficha Técnica</h3>
              <div className="tech-specs-list">
                {gameDetails.map((detail, idx) => (
                  <div key={idx} className="tech-spec-item">
                    <span className="spec-label">{detail.label}</span>
                    <span className="spec-value">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Pitch & Game Mechanics */}
          <div className="pitch-content">
            <h3>Una Experiencia Sensorial y Silenciosa</h3>
            <p>
              <strong>AWAY</strong> se enfoca en crear una atmósfera inmersiva a través de un detallado apartado artístico en 2D pixel art de alto contraste y un diseño de sonido tridimensional. No hay interfaces de usuario invasivas ni marcadores en pantalla; el jugador debe observar los sutiles detalles del entorno para saber a dónde ir.
            </p>
            <p>
              Cada escenario es un puzzle en sí mismo. Los interruptores antiguos, los cables eléctricos colgantes y el flujo del líquido Éter verde brillante son interactivos. Podrás mover cajas, columpiarte en poleas y ocultar tu silueta en la bruma blanca para sortear los implacables campos de escaneo de los guardianes.
            </p>
          </div>
        </div>
      </section>

      {/* System Requirements Section */}
      <section className="requirements-section">
        <div className="section-header text-center">
          <div className="riot-title-wrapper">
            <h2 className="riot-title">REQUISITOS DEL SISTEMA</h2>
            <div className="riot-title-bg"></div>
          </div>
          <p className="section-desc">Al ser una aventura pixel art 2D, AWAY está optimizado para funcionar en una amplia gama de computadoras.</p>
        </div>

        <div className="specs-container">
          {/* Spec Toggle buttons */}
          <div className="specs-toggle">
            <button 
              className={`spec-toggle-btn ${activeSpecTab === 'minimum' ? 'active' : ''}`}
              onClick={() => setActiveSpecTab('minimum')}
            >
              MÍNIMOS
            </button>
            <button 
              className={`spec-toggle-btn ${activeSpecTab === 'recommended' ? 'active' : ''}`}
              onClick={() => setActiveSpecTab('recommended')}
            >
              RECOMENDADOS
            </button>
          </div>

          {/* Spec Table Display */}
          <div className="riot-card specs-table-card">
            <div className="specs-table-header">
              <span>COMPONENTE</span>
              <span>ESPECIFICACIÓN</span>
            </div>
            
            <div className="specs-rows">
              {(activeSpecTab === 'minimum' ? minSpecs : recSpecs).map((item, idx) => (
                <div key={idx} className="spec-row-item animate-fade-in">
                  <span className="spec-row-label">{item.component}</span>
                  <span className="spec-row-value">{item.spec}</span>
                </div>
              ))}
            </div>

            <div className="specs-footer-note">
              <p>* Nota: No requiere tarjeta gráfica dedicada de gama alta. Admite resolución panorámica y controladores de gamepad USB (Xbox, PlayStation, etc.).</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .presentation-tab-container {
          padding-top: 4rem;
          padding-bottom: 6rem;
        }

        /* Details section */
        .details-section {
          margin-bottom: 6rem;
        }

        .details-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.5fr;
          gap: 4rem;
          margin-top: 3rem;
          align-items: flex-start;
        }

        .details-info-card h3 {
          font-size: 1.4rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          border-bottom: 2px solid var(--accent-color);
          padding-bottom: 0.5rem;
        }

        .tech-specs-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .tech-spec-item {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.6rem;
          font-size: 0.95rem;
        }

        .spec-label {
          color: var(--text-secondary);
          font-weight: 600;
        }

        .spec-value {
          color: var(--text-primary);
          font-weight: 700;
          text-align: right;
        }

        .pitch-content h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .pitch-content p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        /* Requirements section */
        .requirements-section {
          border-top: 1px solid var(--border-color);
          padding-top: 5rem;
        }

        .specs-container {
          max-width: 900px;
          margin: 4rem auto 0 auto;
        }

        .specs-toggle {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .spec-toggle-btn {
          background-color: var(--bg-secondary);
          border: 1.5px solid var(--border-color);
          font-family: var(--font-header);
          font-weight: 900;
          font-size: 1rem;
          padding: 0.8rem 2.5rem;
          cursor: pointer;
          transition: var(--transition-smooth);
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
        }

        .spec-toggle-btn:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
        }

        .spec-toggle-btn.active {
          background-color: var(--accent-color);
          border-color: var(--accent-color);
          color: white;
          box-shadow: 0 5px 15px var(--accent-glow);
        }

        .specs-table-card {
          padding: 0;
          clip-path: none;
          border-radius: 8px;
        }

        .specs-table-header {
          display: flex;
          justify-content: space-between;
          background-color: var(--bg-secondary);
          padding: 1.25rem 2rem;
          font-family: var(--font-header);
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          border-bottom: 2px solid var(--border-color);
          color: var(--text-secondary);
        }

        .specs-rows {
          padding: 1rem 0;
        }

        .spec-row-item {
          display: flex;
          justify-content: space-between;
          padding: 1.25rem 2rem;
          border-bottom: 1px solid var(--bg-secondary);
          transition: var(--transition-fast);
        }

        .spec-row-item:last-child {
          border-bottom: none;
        }

        .spec-row-item:hover {
          background-color: var(--bg-secondary);
          border-left: 4px solid var(--accent-color);
        }

        .spec-row-label {
          font-weight: 700;
          font-family: var(--font-header);
          font-size: 0.9rem;
          color: var(--text-secondary);
          width: 35%;
        }

        .spec-row-value {
          font-size: 0.95rem;
          color: var(--text-primary);
          font-weight: 500;
          width: 65%;
          text-align: right;
        }

        .specs-footer-note {
          background-color: var(--bg-secondary);
          padding: 1.25rem 2rem;
          font-size: 0.8rem;
          color: var(--text-light);
          border-top: 1px solid var(--border-color);
        }

        @media (max-width: 850px) {
          .details-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .spec-row-item {
            flex-direction: column;
            gap: 0.5rem;
            align-items: flex-start;
          }
          
          .spec-row-label, .spec-row-value {
            width: 100%;
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};

export default PresentationTab;
