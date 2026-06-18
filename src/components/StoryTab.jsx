import React, { useState } from 'react';

const StoryTab = () => {
  const protagonist = {
    name: 'El Niño',
    codename: 'El Protagonista',
    role: 'Vulnerable / Ágil',
    bio: 'Un niño pequeño atrapado en un impermeable gastado y descolorido. No emite ningún sonido, no tiene armas y su rostro permanece en la penumbra. Despierta en el centro de un bosque mecánico sin memoria de cómo llegó allí, con el único instinto de escapar de las sombras y seguir la distante luz verde.',
    image: '/imagen2.svg',
    color: '#10b981',
    mechanics: [
      { name: 'Sigilo Absoluto', desc: 'Puede agacharse para esconderse detrás de troncos, cajas y tuberías. Su pequeño tamaño le permite deslizarse por grietas estrechas.' },
      { name: 'Escalada Desesperada', desc: 'Capaz de aferrarse a salientes de piedra, enredaderas biotecnológicas o escaleras oxidadas para evadir el peligro terrestre.' },
      { name: 'El Candil de Éter', desc: 'Encuentra un pequeño farol que proyecta un haz de luz verde. Le permite resolver acertijos del entorno y ahuyentar a ciertas sombras menores.' }
    ]
  };

  const enemies = [
    {
      id: 'aguja',
      name: 'El Acechador Aguja',
      type: 'Cazador Terrestre',
      desc: 'Una criatura mecánica delgada con largas patas de aguja que se desplaza silenciosamente por los árboles de hierro. Es completamente ciego, pero su oído es extremadamente agudo. Si corres cerca de él, te encontrará en segundos.',
      mechanics: 'Debes caminar despacio o permanecer inmóvil cuando escuches sus patas metálicas golpear la madera seca.',
      behavior: 'Patrulla las copas de los árboles y desciende rápidamente si detecta ruidos fuertes.',
      image: '/enemigo_aguja.svg'
    },
    {
      id: 'coleccionista',
      name: 'El Coleccionista de Sombras',
      type: 'Cazador de Interiores',
      desc: 'Una silueta gigante y desproporcionada con brazos extremadamente largos. Deambula por los edificios industriales abandonados sosteniendo un viejo farol que proyecta una luz verde opaca. Busca incansablemente a intrusos para guardarlos en sus jaulas de hierro.',
      mechanics: 'Usa las sombras para esconderte debajo de las mesas o dentro de los casilleros antes de que su luz cónica te alcance.',
      behavior: 'Inspecciona esquinas detalladamente. Si sospecha tu presencia, se detendrá y buscará en tu dirección.',
      image: '/enemigo_coleccionista.svg'
    },
    {
      id: 'vigilante',
      name: 'El Vigilante Ciego',
      type: 'Alarma Aérea',
      desc: 'Drones esféricos flotantes oxidados que barren el suelo con una cuadrícula de luz verde fluorescente. Aunque no atacan directamente, activan trampas letales y alertan a los cazadores cercanos si entras en su rango visual.',
      mechanics: 'Calcula el ciclo de su haz de luz y corre de un refugio a otro cuando el foco se desvíe.',
      behavior: 'Sigue trayectorias fijas en áreas abiertas. Se detiene unos segundos al final de cada ruta.',
      image: '/enemigo_vigilante.svg'
    }
  ];

  const [activeEnemy, setActiveEnemy] = useState(enemies[0]);

  return (
    <div className="story-tab-container riot-container animate-fade-in">
      {/* Lore Narrative */}
      <section className="lore-section">
        <div className="riot-title-wrapper">
          <h2 className="riot-title">EL MUNDO DE AWAY</h2>
          <div className="riot-title-bg"></div>
        </div>

        <div className="lore-content-grid">
          <div className="lore-text">
            <h3>Un Silencio que lo Envuelve Todo</h3>
            <p>
              El mundo de <strong>AWAY</strong> no tiene voces, no tiene música heroica, solo el sonido del viento soplando a través de árboles metálicos y el zumbido eléctrico de la maquinaria antigua. Es un desierto de cenizas blancas y llovizna gris, donde la naturaleza ha comenzado a devorar las viejas fábricas que alguna vez dominaron el planeta.
            </p>
            <p>
              En esta quietud abrumadora, una misteriosa sustancia líquida de color verde brillante llamada <strong>Éter</strong> fluye a través de tuberías rotas e impregna la vegetación. El Éter concede una luz guía, pero también alimenta a los guardianes mecánicos que patrullan las ruinas, persiguiendo cualquier rastro de vida orgánica.
            </p>
            <div className="riot-border-accent lore-quote">
              "En AWAY, la curiosidad es tan peligrosa como el ruido. Cada paso hacia la luz verde te acerca a la verdad, pero también al abismo."
            </div>
          </div>
          <div className="lore-image-panel">
            <div className="lore-frame crt-effect">
              <img src="/fondo.svg" alt="El bosque de AWAY" className="lore-image pixelated" />
            </div>
          </div>
        </div>
      </section>

      {/* Nameless Child Protagonist details */}
      <section className="protagonist-section">
        <div className="section-header text-center">
          <div className="riot-title-wrapper">
            <h2 className="riot-title">EL PROTAGONISTA</h2>
            <div className="riot-title-bg"></div>
          </div>
          <p className="section-desc">Tu único recurso en el juego es tu tamaño y el ingenio para sobrevivir.</p>
        </div>

        <div className="protagonist-card-container">
          <div className="riot-card protagonist-card">
            <div className="protagonist-grid-layout">
              <div className="protagonist-visual crt-effect">
                <img src={protagonist.image} alt={protagonist.name} className="protagonist-img pixelated" />
                <span className="protagonist-badge">{protagonist.role}</span>
              </div>
              <div className="protagonist-details">
                <span className="protagonist-subtitle" style={{ color: protagonist.color }}>{protagonist.codename}</span>
                <h3>{protagonist.name}</h3>
                <p className="protagonist-bio">{protagonist.bio}</p>
                
                <div className="protagonist-mechanics">
                  <h4>Mecánicas de Juego</h4>
                  <div className="mechanics-list">
                    {protagonist.mechanics.map((mech, index) => (
                      <div key={index} className="mech-item">
                        <div className="mech-num" style={{ borderColor: protagonist.color, color: protagonist.color }}>
                          {index + 1}
                        </div>
                        <div className="mech-info">
                          <h5>{mech.name}</h5>
                          <p>{mech.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enemies Directory */}
      <section className="enemies-section">
        <div className="section-header text-center">
          <div className="riot-title-wrapper">
            <h2 className="riot-title">LOS ENEMIGOS</h2>
            <div className="riot-title-bg"></div>
          </div>
          <p className="section-desc">Criaturas de sombra y metal que acechan en la penumbra. Conocerlos es tu única salvación.</p>
        </div>

        <div className="enemies-interface">
          {/* Enemy List selector */}
          <div className="enemies-list-nav">
            {enemies.map((enemy) => (
              <button
                key={enemy.id}
                className={`enemy-nav-item ${activeEnemy.id === enemy.id ? 'active' : ''}`}
                onClick={() => setActiveEnemy(enemy)}
              >
                <span className="enemy-nav-name">{enemy.name}</span>
                <span className="enemy-nav-type">{enemy.type}</span>
              </button>
            ))}
          </div>

          {/* Enemy detail card */}
          <div className="riot-card enemy-profile-card">
            <div className="enemy-grid-layout">
              <div className="enemy-visual crt-effect">
                <img src={activeEnemy.image} alt={activeEnemy.name} className="enemy-img pixelated" />
              </div>
              <div className="enemy-details">
                <span className="enemy-type-badge">{activeEnemy.type}</span>
                <h3>{activeEnemy.name}</h3>
                <p className="enemy-desc">{activeEnemy.desc}</p>
                
                <div className="enemy-behaviors">
                  <div className="behavior-box">
                    <h5>Comportamiento</h5>
                    <p>{activeEnemy.behavior}</p>
                  </div>
                  <div className="behavior-box accent-box">
                    <h5>Cómo evadirlo</h5>
                    <p>{activeEnemy.mechanics}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .story-tab-container {
          padding-top: 4rem;
          padding-bottom: 6rem;
        }

        /* Pixelated Image classes */
        .pixelated {
          image-rendering: pixelated;
          image-rendering: crisp-edges;
          filter: contrast(1.1) brightness(0.95);
        }

        .crt-effect {
          position: relative;
          overflow: hidden;
        }

        .crt-effect::after {
          content: " ";
          display: block;
          position: absolute;
          top: 0; left: 0; bottom: 0; right: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%);
          z-index: 2;
          background-size: 100% 4px;
          pointer-events: none;
        }

        /* Lore Section */
        .lore-section {
          margin-bottom: 7rem;
        }

        .lore-content-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-top: 3rem;
        }

        .lore-text h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .lore-text p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .lore-quote {
          padding: 1rem 0 1rem 1.5rem;
          font-style: italic;
          font-size: 1.1rem;
          color: var(--accent-dark);
          font-weight: 500;
          margin-top: 2rem;
          border-left: 3px solid var(--accent-color);
        }

        .lore-image-panel {
          position: relative;
        }

        .lore-frame {
          padding: 10px;
          border: 1px solid var(--border-color);
          background-color: var(--bg-secondary);
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
        }

        .lore-image {
          width: 100%;
          height: auto;
          display: block;
          clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
          transition: var(--transition-smooth);
        }

        /* Protagonist Section */
        .protagonist-section {
          border-top: 1px solid var(--border-color);
          padding-top: 5rem;
          margin-bottom: 6rem;
        }

        .protagonist-card {
          padding: 3rem;
          border-color: var(--border-color);
        }

        .protagonist-grid-layout {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
          align-items: center;
        }

        .protagonist-visual {
          position: relative;
          height: 380px;
          border: 1.5px solid var(--border-color);
          background-color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
        }

        .protagonist-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .protagonist-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          background-color: var(--accent-color);
          color: white;
          font-family: var(--font-header);
          font-weight: 700;
          font-size: 0.8rem;
          padding: 0.4rem 1rem;
          text-transform: uppercase;
          z-index: 3;
          border-radius: 4px;
        }

        .protagonist-subtitle {
          font-family: var(--font-header);
          font-weight: 800;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          display: block;
          margin-bottom: 0.5rem;
        }

        .protagonist-details h3 {
          font-size: 3rem;
          margin-bottom: 1.25rem;
        }

        .protagonist-bio {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .protagonist-mechanics h4 {
          font-size: 1.1rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }

        .mechanics-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mech-item {
          display: flex;
          gap: 1rem;
        }

        .mech-num {
          width: 32px;
          height: 32px;
          border: 2px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-header);
          font-weight: 900;
          font-size: 1rem;
          flex-shrink: 0;
          clip-path: polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%);
        }

        .mech-info h5 {
          font-size: 0.95rem;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .mech-info p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        /* Enemies Section */
        .enemies-section {
          border-top: 1px solid var(--border-color);
          padding-top: 5rem;
        }

        .enemies-interface {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 3rem;
          margin-top: 4rem;
        }

        .enemies-list-nav {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .enemy-nav-item {
          background-color: var(--bg-secondary);
          border: 1.5px solid var(--border-color);
          padding: 1.2rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          cursor: pointer;
          transition: var(--transition-smooth);
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
        }

        .enemy-nav-item:hover {
          border-color: var(--accent-color);
          background-color: var(--bg-primary);
          transform: translateX(5px);
        }

        .enemy-nav-item.active {
          border-color: var(--accent-color);
          background-color: var(--bg-primary);
          box-shadow: -5px 0 0 var(--accent-color), 0 5px 15px var(--accent-glow);
        }

        .enemy-nav-name {
          font-family: var(--font-header);
          font-size: 1.25rem;
          font-weight: 900;
          color: var(--text-primary);
          text-transform: uppercase;
        }

        .enemy-nav-type {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 0.25rem;
        }

        .enemy-profile-card {
          padding: 2.5rem;
        }

        .enemy-grid-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
          align-items: center;
        }

        .enemy-visual {
          position: relative;
          height: 320px;
          border: 1.5px solid var(--border-color);
          background-color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
        }

        .enemy-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .enemy-type-badge {
          background-color: #fee2e2;
          color: #ef4444;
          font-family: var(--font-header);
          font-weight: 800;
          font-size: 0.8rem;
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 0.75rem;
        }

        .enemy-details h3 {
          font-size: 2.2rem;
          margin-bottom: 1rem;
        }

        .enemy-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .enemy-behaviors {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .behavior-box {
          background-color: var(--bg-secondary);
          padding: 1.25rem;
          border-left: 3.5px solid var(--border-color);
          border-radius: 4px;
        }

        .behavior-box.accent-box {
          background-color: var(--bg-secondary);
          border-left-color: var(--accent-color);
        }

        .behavior-box h5 {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .behavior-box p {
          font-size: 0.82rem;
          line-height: 1.4;
          color: var(--text-secondary);
        }

        @media (max-width: 992px) {
          .protagonist-grid-layout {
            grid-template-columns: 1fr;
          }
          
          .protagonist-visual {
            height: 300px;
          }

          .enemies-interface {
            grid-template-columns: 1fr;
          }

          .enemies-list-nav {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }

          .enemy-nav-item {
            width: 200px;
            flex-shrink: 0;
          }

          .enemy-grid-layout {
            grid-template-columns: 1fr;
          }
          
          .enemy-visual {
            height: 250px;
          }
        }

        @media (max-width: 768px) {
          .lore-content-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          
          .enemy-behaviors {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default StoryTab;
