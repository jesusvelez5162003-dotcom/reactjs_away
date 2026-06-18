import React, { useState } from 'react';

const GalleryTab = () => {
  const screenshots = [
    {
      id: 0,
      src: '/imagen1.svg',
      title: 'Las Tuberías del Sector Industrial',
      desc: 'El niño cruza un puente de tuberías oxidadas sobre conductos de condensación de Éter. El sigilo y el ritmo lento previenen caídas fatales.'
    },
    {
      id: 1,
      src: '/imagen2.svg',
      title: 'La Luz del Éter',
      desc: 'Con su faro de Éter en mano, el niño avanza por un corredor de bosque oscuro iluminado por hongos bioluminiscentes. La oscuridad esconde tanto el camino como el peligro.'
    },
    {
      id: 2,
      src: '/imagen3.svg',
      title: 'Mecanismos y Puertas de Presión',
      desc: 'Resolviendo un acertijo de Éter verde. Conecta las células de energía bioluminiscente para activar las antiguas compuertas de seguridad neumáticas.'
    }
  ];

  const [activeLightboxIdx, setActiveLightboxIdx] = useState(null);

  const openLightbox = (index) => {
    setActiveLightboxIdx(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIdx(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveLightboxIdx((prevIdx) => (prevIdx + 1) % screenshots.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveLightboxIdx((prevIdx) => (prevIdx - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="gallery-tab-container riot-container animate-fade-in">
      <div className="section-header text-center">
        <div className="riot-title-wrapper">
          <h2 className="riot-title">CAPTURA DE PANTALLA</h2>
          <div className="riot-title-bg"></div>
        </div>
        <p className="section-desc">Escenas directas del juego que ilustran la atmósfera silenciosa y la iluminación de Éter en AWAY.</p>
      </div>

      {/* Grid of 3 images */}
      <div className="gallery-grid">
        {screenshots.map((img, idx) => (
          <div 
            key={img.id} 
            className="gallery-item-wrapper"
            onClick={() => openLightbox(idx)}
          >
            <div className="gallery-card">
              <div className="gallery-img-container crt-effect">
                <img src={img.src} alt={img.title} className="gallery-image pixelated" />
                <div className="gallery-hover-overlay">
                  <div className="zoom-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="11" cy="11" r="8"/>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      <line x1="11" y1="8" x2="11" y2="14"/>
                      <line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="gallery-info">
                <h3>{img.title}</h3>
                <p>{img.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIdx !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close-btn" onClick={closeLightbox}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <button className="lightbox-nav-btn prev" onClick={prevImage}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="crt-effect" style={{ width: '100%' }}>
              <img 
                src={screenshots[activeLightboxIdx].src} 
                alt={screenshots[activeLightboxIdx].title} 
                className="lightbox-image pixelated animate-fade-in" 
              />
            </div>
            <div className="lightbox-caption">
              <h3>{screenshots[activeLightboxIdx].title}</h3>
              <p>{screenshots[activeLightboxIdx].desc}</p>
            </div>
          </div>

          <button className="lightbox-nav-btn next" onClick={nextImage}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      )}

      <style>{`
        .gallery-tab-container {
          padding-top: 4rem;
          padding-bottom: 6rem;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
          margin-top: 4rem;
        }

        .gallery-item-wrapper {
          cursor: pointer;
        }

        .gallery-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          overflow: hidden;
          transition: var(--transition-smooth);
          height: 100%;
          display: flex;
          flex-direction: column;
          clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
        }

        .gallery-img-container {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
          background-color: #000;
        }

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

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }

        .gallery-hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(16, 185, 129, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition-smooth);
          z-index: 3;
        }

        .zoom-icon {
          width: 50px;
          height: 50px;
          background-color: white;
          color: var(--text-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          transform: scale(0.7);
          transition: var(--transition-smooth);
        }

        .zoom-icon svg {
          width: 24px;
          height: 24px;
        }

        .gallery-card:hover {
          border-color: var(--accent-color);
          transform: translateY(-5px);
          box-shadow: 0 10px 25px var(--accent-glow);
        }

        .gallery-card:hover .gallery-image {
          transform: scale(1.08);
        }

        .gallery-card:hover .gallery-hover-overlay {
          opacity: 1;
        }

        .gallery-card:hover .zoom-icon {
          transform: scale(1);
        }

        .gallery-info {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .gallery-info h3 {
          font-size: 1.15rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
          text-transform: uppercase;
        }

        .gallery-info p {
          font-size: 0.88rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        /* Lightbox styles */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(11, 19, 14, 0.95);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;
        }

        .lightbox-content {
          max-width: 1000px;
          width: 90%;
          background-color: var(--bg-primary);
          border: 1px solid var(--accent-color);
          display: flex;
          flex-direction: column;
          clip-path: polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 25px 100%, 0 calc(100% - 25px));
          animation: fadeIn 0.4s var(--transition-smooth);
        }

        .lightbox-image {
          width: 100%;
          max-height: 60vh;
          object-fit: cover;
          display: block;
        }

        .lightbox-caption {
          padding: 2rem;
          background-color: var(--bg-secondary);
        }

        .lightbox-caption h3 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .lightbox-caption p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .lightbox-close-btn {
          position: absolute;
          top: 30px;
          right: 30px;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
          transition: var(--transition-fast);
        }

        .lightbox-close-btn:hover {
          color: var(--accent-color);
          transform: rotate(90deg);
        }

        .lightbox-close-btn svg {
          width: 32px;
          height: 32px;
        }

        .lightbox-nav-btn {
          background-color: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
          position: absolute;
          z-index: 1001;
        }

        .lightbox-nav-btn:hover {
          background-color: var(--accent-color);
          color: var(--bg-dark-contrast);
          box-shadow: 0 0 15px var(--accent-glow);
        }

        .lightbox-nav-btn svg {
          width: 24px;
          height: 24px;
        }

        .lightbox-nav-btn.prev {
          left: 5%;
        }

        .lightbox-nav-btn.next {
          right: 5%;
        }

        @media (max-width: 900px) {
          .lightbox-nav-btn {
            position: relative;
            margin: 0 1rem;
          }
          
          .lightbox-nav-btn.prev, .lightbox-nav-btn.next {
            left: auto;
            right: auto;
          }
          
          .lightbox-overlay {
            flex-direction: column;
            justify-content: center;
            gap: 2rem;
          }
          
          .lightbox-close-btn {
            top: 15px;
            right: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryTab;
