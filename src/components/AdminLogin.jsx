import React, { useState } from 'react';

const AdminLogin = ({ onLoginSuccess }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Default admin credentials
    if (credentials.username === 'admin' && credentials.password === 'adminaway2026') {
      localStorage.setItem('isAdminLoggedIn', 'true');
      onLoginSuccess();
    } else {
      setErrorMsg('Usuario o contraseña incorrectos. Intente de nuevo.');
    }
  };

  return (
    <div className="login-tab-container riot-container animate-fade-in">
      <div className="login-box-wrapper">
        <div className="riot-card login-card">
          <div className="login-header text-center">
            <img src="/logo.png" alt="AWAY Admin" className="login-logo" />
            <span className="login-studio-tag">PIXEL NOVA STUDIO</span>
            <h2>ADMIN PORTAL</h2>
            <p>Inicio de sesión para administradores del proyecto AWAY</p>
          </div>

          {errorMsg && <div className="error-alert">{errorMsg}</div>}

          <form onSubmit={handleLogin} className="login-form">
            <div className="riot-form-group">
              <label htmlFor="username">Usuario</label>
              <input
                type="text"
                id="username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                className="riot-input"
                placeholder="Ej. admin"
                required
              />
            </div>

            <div className="riot-form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className="riot-input"
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="riot-btn riot-btn-accent login-btn">
              INICIAR SESIÓN
            </button>
          </form>

          <div className="credentials-hint">
            <p><strong>Credenciales Demo:</strong></p>
            <p>Usuario: <code>admin</code></p>
            <p>Contraseña: <code>adminaway2026</code></p>
          </div>
        </div>
      </div>

      <style>{`
        .login-tab-container {
          padding-top: 6rem;
          padding-bottom: 7rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - var(--header-height) - 100px);
        }

        .login-box-wrapper {
          width: 100%;
          max-width: 480px;
        }

        .login-card {
          border-color: var(--border-accent-strong);
        }

        .login-header {
          margin-bottom: 2.5rem;
        }

        .login-logo {
          height: 60px;
          object-fit: contain;
          margin-bottom: 1rem;
          filter: drop-shadow(0 4px 6px var(--accent-glow));
        }

        .login-header h2 {
          font-size: 1.8rem;
          color: var(--text-primary);
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .login-studio-tag {
          display: block;
          font-family: var(--font-header);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.3em;
          color: var(--accent-color);
          margin-bottom: 0.75rem;
        }

        .login-header p {
          font-size: 0.85rem;
          color: var(--text-light);
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .login-btn {
          margin-top: 1.5rem;
          width: 100%;
        }

        .error-alert {
          background-color: #fee2e2;
          border-left: 4px solid #ef4444;
          color: #991b1b;
          padding: 0.85rem 1rem;
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .credentials-hint {
          margin-top: 2rem;
          padding: 1rem;
          background-color: var(--bg-secondary);
          border-left: 3px solid var(--accent-color);
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .credentials-hint p:first-child {
          margin-bottom: 0.4rem;
          color: var(--text-primary);
        }

        .credentials-hint code {
          background-color: #e5e7eb;
          padding: 0.1rem 0.3rem;
          border-radius: 3px;
          font-family: monospace;
          color: var(--text-primary);
        }
      `}</style>
    </div>
  );
};

export default AdminLogin;
