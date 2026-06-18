import React, { useState } from 'react';

const RegisterTab = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    gamertag: '',
    region: 'LATAM',
    role: 'Indeciso', // default to undecided since roles are different now
    agreeToTerms: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const regions = ['LATAM', 'Norteamérica', 'Europa', 'Asia', 'Oceanía'];
  const interests = ['Demo Técnica Pre-Alpha', 'Diarios de Desarrollo', 'Banda Sonora y Arte', 'Todo lo anterior'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validations
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.gamertag.trim()) {
      setErrorMsg('Por favor, rellene todos los campos requeridos.');
      return;
    }

    if (!formData.agreeToTerms) {
      setErrorMsg('Debe aceptar los términos de servicio para registrarse.');
      return;
    }

    setErrorMsg('');

    // Fetch existing registrations
    const existingUsers = JSON.parse(localStorage.getItem('away_registered_users') || '[]');
    
    // Check if email already registered
    if (existingUsers.some(u => u.email.toLowerCase() === formData.email.toLowerCase())) {
      setErrorMsg('Este correo electrónico ya está registrado.');
      return;
    }

    // Save user with date and ID
    const newUser = {
      id: Date.now().toString(),
      ...formData,
      registrationDate: new Date().toLocaleDateString(),
      messagesSent: [] // Track sent newsletter messages
    };

    const updatedUsers = [newUser, ...existingUsers];
    localStorage.setItem('away_registered_users', JSON.stringify(updatedUsers));

    setSubmitted(true);
    setFormData({
      fullName: '',
      email: '',
      gamertag: '',
      region: 'LATAM',
      role: 'Todo lo anterior',
      agreeToTerms: false
    });
  };

  return (
    <div className="register-tab-container riot-container animate-fade-in">
      <div className="register-grid">
        {/* Left column: Epic pitch */}
        <div className="register-pitch">
          <span className="pitch-tag">REGISTRO DE EXPLORADORES</span>
          <h2>Atrévete a Adentrarte en AWAY</h2>
          <p>
            Al registrarte en nuestro boletín, te apuntas en la lista de correo principal de desarrollo de **AWAY**. Recibirás códigos para jugar a la **Demo Técnica Pre-Alpha**, adelantos del libro de arte digital y enlaces de descarga de la banda sonora ambiental.
          </p>

          <div className="perks-list">
            <div className="perk-item">
              <span className="perk-bullet">✦</span>
              <div>
                <h4>Demo Pre-Alpha</h4>
                <p>Acceso anticipado exclusivo a las mecánicas de puzzles y sigilo en 2D.</p>
              </div>
            </div>
            <div className="perk-item">
              <span className="perk-bullet">✦</span>
              <div>
                <h4>Arte Digital de Regalo</h4>
                <p>Recibe bocetos y concepts exclusivos de los escenarios pixel art.</p>
              </div>
            </div>
            <div className="perk-item">
              <span className="perk-bullet">✦</span>
              <div>
                <h4>Banda Sonora Original</h4>
                <p>Recibe los temas de sintetizadores analógicos en alta definición gratis.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Form / Submission confirmation */}
        <div className="register-form-wrapper">
          {!submitted ? (
            <div className="riot-card register-card">
              <h3>Lista de Novedades</h3>
              <p className="card-sub">Registra tus datos para unirte al viaje.</p>
              
              {errorMsg && <div className="error-alert">{errorMsg}</div>}

              <form onSubmit={handleSubmit} className="register-form">
                <div className="riot-form-group">
                  <label htmlFor="fullName">Nombre Completo *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="riot-input"
                    placeholder="Ej. Martín Santos"
                    required
                  />
                </div>

                <div className="riot-form-group">
                  <label htmlFor="gamertag">Apodo / Gamertag *</label>
                  <input
                    type="text"
                    id="gamertag"
                    name="gamertag"
                    value={formData.gamertag}
                    onChange={handleChange}
                    className="riot-input"
                    placeholder="Ej. Tintin#AWAY"
                    required
                  />
                </div>

                <div className="riot-form-group">
                  <label htmlFor="email">Correo Electrónico *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="riot-input"
                    placeholder="Ej. martin@correo.com"
                    required
                  />
                </div>

                <div className="riot-form-group">
                  <label htmlFor="region">Región</label>
                  <select
                    id="region"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    className="riot-input select-input"
                  >
                    {regions.map((reg) => (
                      <option key={reg} value={reg}>{reg}</option>
                    ))}
                  </select>
                </div>

                <div className="riot-form-group">
                  <label htmlFor="role">¿Qué Novedad te Interesa?</label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="riot-input select-input"
                  >
                    {interests.map((interest) => (
                      <option key={interest} value={interest}>{interest}</option>
                    ))}
                  </select>
                </div>

                <div className="riot-form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="custom-checkbox"
                    />
                    <span>Acepto recibir correos del estudio <strong>Pixel Nova</strong> sobre el desarrollo de AWAY y participar en rondas de pruebas de sigilo. *</span>
                  </label>
                </div>

                <button type="submit" className="riot-btn riot-btn-accent submit-btn">
                  REGISTRARME
                </button>
              </form>
            </div>
          ) : (
            <div className="riot-card success-card text-center animate-fade-in">
              <div className="success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h2>¡ENLISTADO CON ÉXITO!</h2>
              <p className="success-subtitle">Has sido añadido al censo de supervivientes de AWAY.</p>
              <div className="success-details text-left">
                <p>Te enviaremos un correo electrónico cuando la pre-alpha esté lista para descargar en tu región.</p>
                <p>Gracias por apoyarnos en el desarrollo temprano del juego.</p>
              </div>
              <button 
                className="riot-btn riot-btn-outline" 
                onClick={() => setSubmitted(false)}
              >
                REGISTRAR OTRA CUENTA
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .register-tab-container {
          padding-top: 5rem;
          padding-bottom: 7rem;
        }

        .register-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .register-pitch h2 {
          font-size: 2.8rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .pitch-tag {
          font-family: var(--font-header);
          font-weight: 800;
          font-size: 0.85rem;
          color: var(--accent-color);
          letter-spacing: 0.2em;
          display: block;
          margin-bottom: 0.75rem;
        }

        .register-pitch p {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
        }

        .perks-list {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .perk-item {
          display: flex;
          gap: 1.25rem;
        }

        .perk-bullet {
          color: var(--accent-color);
          font-size: 1.5rem;
          line-height: 1;
        }

        .perk-item h4 {
          font-size: 1.05rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .perk-item p {
          font-size: 0.9rem;
          margin-bottom: 0;
          color: var(--text-secondary);
        }

        .register-card {
          border-color: var(--border-accent-strong);
        }

        .register-card h3 {
          font-size: 1.6rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .card-sub {
          font-size: 0.9rem;
          color: var(--text-light);
          margin-bottom: 2rem;
        }

        .register-form {
          display: flex;
          flex-direction: column;
        }

        .select-input {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234b5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 1.2rem center;
          background-size: 1.2rem;
          padding-right: 2.5rem;
        }

        .checkbox-group {
          margin-top: 0.5rem;
          margin-bottom: 2rem;
        }

        .checkbox-label {
          display: flex !important;
          align-items: flex-start;
          gap: 0.75rem;
          cursor: pointer;
        }

        .checkbox-label span {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.4;
          text-transform: none;
          letter-spacing: 0;
          font-weight: 500;
        }

        .custom-checkbox {
          width: 18px;
          height: 18px;
          accent-color: var(--accent-color);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .submit-btn {
          width: 100%;
        }

        .error-alert {
          background-color: #fee2e2;
          border-left: 4px solid #ef4444;
          color: #991b1b;
          padding: 1rem;
          font-size: 0.88rem;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        /* Success Card */
        .success-card {
          border-color: var(--accent-color);
          padding: 3.5rem 2.5rem;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          background-color: var(--bg-secondary);
          color: var(--accent-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem auto;
          border: 2px solid var(--accent-color);
          animation: pulseGlow 2s infinite;
        }

        .success-icon svg {
          width: 44px;
          height: 44px;
        }

        .success-card h2 {
          font-size: 2rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .success-subtitle {
          font-size: 0.95rem;
          color: var(--accent-dark);
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }

        .success-details {
          background-color: var(--bg-secondary);
          padding: 1.5rem;
          border-left: 3px solid var(--accent-color);
          margin-bottom: 2.5rem;
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .success-details p:first-child {
          margin-bottom: 0.75rem;
        }

        @media (max-width: 900px) {
          .register-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default RegisterTab;
