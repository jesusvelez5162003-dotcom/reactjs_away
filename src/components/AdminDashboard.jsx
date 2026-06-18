import React, { useState, useEffect } from 'react';

const AdminDashboard = ({ onLogout }) => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('ALL');
  const [roleFilter, setRoleFilter] = useState('ALL');

  // Modals state
  const [editingUser, setEditingUser] = useState(null);
  const [messagingUser, setMessagingUser] = useState(null); // specific user or 'ALL'
  const [messageContent, setMessageContent] = useState({ subject: '', body: '' });
  const [successToast, setSuccessToast] = useState('');

  // Initial seeding if empty
  useEffect(() => {
    const stored = localStorage.getItem('away_registered_users');
    if (stored) {
      setUsers(JSON.parse(stored));
    } else {
      const mockUsers = [
        {
          id: '1',
          fullName: 'Alejandro Silva',
          gamertag: 'AlexMisterio#LAT',
          email: 'alex.silva@demo.com',
          region: 'LATAM',
          role: 'Demo Técnica Pre-Alpha',
          registrationDate: '15/06/2026',
          messagesSent: [
            { id: 'm1', date: '16/06/2026', subject: 'Bienvenido al Programa Alfa', body: 'Felicidades, tu cuenta ha sido seleccionada.' }
          ]
        },
        {
          id: '2',
          fullName: 'Mariana Gómez',
          gamertag: 'MariRain#NA1',
          email: 'mariana.g@example.com',
          region: 'Norteamérica',
          role: 'Diarios de Desarrollo',
          registrationDate: '16/06/2026',
          messagesSent: []
        },
        {
          id: '3',
          fullName: 'Christian Krogh',
          gamertag: 'KroghSpectre#EUW',
          email: 'c.krogh@nordic.no',
          region: 'Europa',
          role: 'Banda Sonora y Arte',
          registrationDate: '17/06/2026',
          messagesSent: []
        }
      ];
      localStorage.setItem('away_registered_users', JSON.stringify(mockUsers));
      setUsers(mockUsers);
    }
  }, []);

  const saveUsersToStorage = (updatedUsers) => {
    localStorage.setItem('away_registered_users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  // Trigger temporary notification
  const triggerToast = (msg) => {
    setSuccessToast(msg);
    setTimeout(() => {
      setSuccessToast('');
    }, 4000);
  };

  // Modify / Edit
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingUser((prev) => ({ ...prev, [name]: value }));
  };

  const submitEdit = (e) => {
    e.preventDefault();
    if (!editingUser.fullName.trim() || !editingUser.email.trim() || !editingUser.gamertag.trim()) {
      alert('Por favor complete todos los campos obligatorios');
      return;
    }

    const updated = users.map((user) => (user.id === editingUser.id ? editingUser : user));
    saveUsersToStorage(updated);
    setEditingUser(null);
    triggerToast('¡Usuario modificado con éxito!');
  };

  // Delete
  const handleDelete = (id, name) => {
    if (window.confirm(`¿Está seguro de que desea eliminar al usuario ${name}?`)) {
      const updated = users.filter((user) => user.id !== id);
      saveUsersToStorage(updated);
      triggerToast('Usuario eliminado de la base de datos.');
    }
  };

  // Message Sending
  const submitMessage = (e) => {
    e.preventDefault();
    if (!messageContent.subject.trim() || !messageContent.body.trim()) {
      alert('Por favor complete el asunto y cuerpo del mensaje');
      return;
    }

    const newMessageObj = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      subject: messageContent.subject,
      body: messageContent.body
    };

    let updated;
    if (messagingUser === 'ALL') {
      // Broadcast to all
      updated = users.map((user) => ({
        ...user,
        messagesSent: [newMessageObj, ...(user.messagesSent || [])]
      }));
      triggerToast(`Mensaje enviado grupalmente a ${users.length} usuarios.`);
    } else {
      // Send to specific user
      updated = users.map((user) => {
        if (user.id === messagingUser.id) {
          return {
            ...user,
            messagesSent: [newMessageObj, ...(user.messagesSent || [])]
          };
        }
        return user;
      });
      triggerToast(`Mensaje enviado con éxito a ${messagingUser.fullName}.`);
    }

    saveUsersToStorage(updated);
    setMessagingUser(null);
    setMessageContent({ subject: '', body: '' });
  };

  // Search & Filters
  const filteredUsers = users.filter((user) => {
    const matchesSearch = 
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.gamertag.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRegion = regionFilter === 'ALL' || user.region === regionFilter;
    const matchesRole = roleFilter === 'ALL' || user.role === roleFilter;

    return matchesSearch && matchesRegion && matchesRole;
  });

  return (
    <div className="admin-dashboard-container riot-container animate-fade-in">
      {/* Dashboard Top Header */}
      <div className="dashboard-header">
        <div>
          <span className="dash-tag">PIXEL NOVA STUDIO — PANEL DE CONTROL</span>
          <h2>GESTIÓN DE REGISTROS</h2>
        </div>
        <div className="dash-header-actions">
          <button 
            className="riot-btn riot-btn-outline group-msg-btn"
            onClick={() => setMessagingUser('ALL')}
            disabled={users.length === 0}
          >
            MENSAJE GRUPAL
          </button>
          <button className="riot-btn logout-btn" onClick={onLogout}>
            CERRAR SESIÓN
          </button>
        </div>
      </div>

      {/* Success Toast */}
      {successToast && (
        <div className="success-toast animate-fade-in">
          <span className="toast-icon">✓</span>
          <span>{successToast}</span>
        </div>
      )}

      {/* Filters section */}
      <div className="riot-card filters-card">
        <h3>Filtros y Búsqueda</h3>
        <div className="filters-grid">
          <div className="filter-group">
            <label>Buscar usuario</label>
            <input
              type="text"
              placeholder="Buscar por Nombre, Gamertag o Email..."
              className="riot-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label>Filtrar por Región</label>
            <select
              className="riot-input select-input"
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
            >
              <option value="ALL">Todas las regiones</option>
              <option value="LATAM">LATAM</option>
              <option value="Norteamérica">Norteamérica</option>
              <option value="Europa">Europa</option>
              <option value="Asia">Asia</option>
              <option value="Oceanía">Oceanía</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Filtrar por Interés</label>
            <select
              className="riot-input select-input"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option value="ALL">Todos los intereses</option>
              <option value="Demo Técnica Pre-Alpha">Demo Técnica Pre-Alpha</option>
              <option value="Diarios de Desarrollo">Diarios de Desarrollo</option>
              <option value="Banda Sonora y Arte">Banda Sonora y Arte</option>
              <option value="Todo lo anterior">Todo lo anterior</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Table view */}
      <div className="riot-card table-card">
        <div className="table-responsive">
          <table className="users-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Gamertag</th>
                <th>Email</th>
                <th>Región</th>
                <th>Interés</th>
                <th>Fecha Reg.</th>
                <th>Envíos</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td><strong>{user.fullName}</strong></td>
                    <td><code className="gamertag-badge">{user.gamertag}</code></td>
                    <td>{user.email}</td>
                    <td>{user.region}</td>
                    <td><span className="role-label">{user.role}</span></td>
                    <td>{user.registrationDate}</td>
                    <td>
                      <span className="msg-count-badge" title="Mensajes enviados a este usuario">
                        ✉ {user.messagesSent?.length || 0}
                      </span>
                    </td>
                    <td>
                      <div className="table-actions">
                        <button 
                          className="action-btn edit" 
                          onClick={() => setEditingUser(user)}
                          title="Modificar"
                        >
                          ✏
                        </button>
                        <button 
                          className="action-btn msg" 
                          onClick={() => setMessagingUser(user)}
                          title="Enviar Mensaje"
                        >
                          ✉
                        </button>
                        <button 
                          className="action-btn delete" 
                          onClick={() => handleDelete(user.id, user.fullName)}
                          title="Eliminar"
                        >
                          🗑
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="no-results text-center">
                    No se encontraron usuarios registrados que coincidan con los filtros.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL 1: EDIT USER (MODIFICAR) */}
      {editingUser && (
        <div className="modal-overlay" onClick={() => setEditingUser(null)}>
          <div className="modal-content riot-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Modificar Registro</h3>
              <button className="close-modal-btn" onClick={() => setEditingUser(null)}>×</button>
            </div>
            
            <form onSubmit={submitEdit} className="modal-form">
              <div className="riot-form-group">
                <label>Nombre Completo</label>
                <input
                  type="text"
                  name="fullName"
                  value={editingUser.fullName}
                  onChange={handleEditChange}
                  className="riot-input"
                  required
                />
              </div>

              <div className="riot-form-group">
                <label>Gamertag</label>
                <input
                  type="text"
                  name="gamertag"
                  value={editingUser.gamertag}
                  onChange={handleEditChange}
                  className="riot-input"
                  required
                />
              </div>

              <div className="riot-form-group">
                <label>Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={editingUser.email}
                  onChange={handleEditChange}
                  className="riot-input"
                  required
                />
              </div>

              <div className="riot-form-group">
                <label>Región</label>
                <select
                  name="region"
                  value={editingUser.region}
                  onChange={handleEditChange}
                  className="riot-input select-input"
                >
                  <option value="LATAM">LATAM</option>
                  <option value="Norteamérica">Norteamérica</option>
                  <option value="Europa">Europa</option>
                  <option value="Asia">Asia</option>
                  <option value="Oceanía">Oceanía</option>
                </select>
              </div>

              <div className="riot-form-group">
                <label>Interés Principal</label>
                <select
                  name="role"
                  value={editingUser.role}
                  onChange={handleEditChange}
                  className="riot-input select-input"
                >
                  <option value="Demo Técnica Pre-Alpha">Demo Técnica Pre-Alpha</option>
                  <option value="Diarios de Desarrollo">Diarios de Desarrollo</option>
                  <option value="Banda Sonora y Arte">Banda Sonora y Arte</option>
                  <option value="Todo lo anterior">Todo lo anterior</option>
                </select>
              </div>

              <div className="modal-footer">
                <button type="button" className="riot-btn" onClick={() => setEditingUser(null)}>
                  CANCELAR
                </button>
                <button type="submit" className="riot-btn riot-btn-accent">
                  GUARDAR CAMBIOS
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: SEND MESSAGE (ENVIAR MENSAJE) */}
      {messagingUser && (
        <div className="modal-overlay" onClick={() => setMessagingUser(null)}>
          <div className="modal-content messaging-modal riot-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                {messagingUser === 'ALL' 
                  ? 'Enviar Mensaje Grupal (Boletín)' 
                  : `Enviar Mensaje a: ${messagingUser.fullName}`}
              </h3>
              <button className="close-modal-btn" onClick={() => setMessagingUser(null)}>×</button>
            </div>

            <form onSubmit={submitMessage} className="modal-form">
              {messagingUser !== 'ALL' && (
                <div className="recipient-summary">
                  <p><strong>Destinatario:</strong> {messagingUser.email} ({messagingUser.gamertag})</p>
                </div>
              )}
              
              <div className="riot-form-group">
                <label>Asunto del Correo / Mensaje</label>
                <input
                  type="text"
                  placeholder="Ej. Invitación a la Beta Cerrada de AWAY"
                  value={messageContent.subject}
                  onChange={(e) => setMessageContent(prev => ({ ...prev, subject: e.target.value }))}
                  className="riot-input"
                  required
                />
              </div>

              <div className="riot-form-group">
                <label>Cuerpo del Mensaje</label>
                <textarea
                  placeholder="Escriba los detalles aquí..."
                  value={messageContent.body}
                  onChange={(e) => setMessageContent(prev => ({ ...prev, body: e.target.value }))}
                  className="riot-input textarea-input"
                  required
                />
              </div>

              {/* Show message log for single user */}
              {messagingUser !== 'ALL' && messagingUser.messagesSent && messagingUser.messagesSent.length > 0 && (
                <div className="message-history">
                  <h4>Historial de Mensajes Enviados</h4>
                  <div className="history-list">
                    {messagingUser.messagesSent.map((msg) => (
                      <div key={msg.id} className="history-item">
                        <div className="history-item-header">
                          <strong>{msg.subject}</strong>
                          <span>{msg.date}</span>
                        </div>
                        <p>{msg.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="modal-footer">
                <button type="button" className="riot-btn" onClick={() => setMessagingUser(null)}>
                  CANCELAR
                </button>
                <button type="submit" className="riot-btn riot-btn-accent">
                  ENVIAR MENSAJE
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .admin-dashboard-container {
          padding-top: 5rem;
          padding-bottom: 7rem;
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .dash-tag {
          font-family: var(--font-header);
          font-weight: 800;
          font-size: 0.85rem;
          color: var(--accent-color);
          letter-spacing: 0.25em;
          display: block;
          margin-bottom: 0.5rem;
        }

        .dashboard-header h2 {
          font-size: 2.6rem;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .dash-header-actions {
          display: flex;
          gap: 1rem;
        }

        .logout-btn {
          padding: 0.6rem 1.5rem;
          font-size: 0.85rem;
        }

        .group-msg-btn {
          padding: 0.6rem 1.5rem;
          font-size: 0.85rem;
        }

        /* Filters Card */
        .filters-card {
          margin-bottom: 2.5rem;
        }

        .filters-card h3 {
          font-size: 1.2rem;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .filters-grid {
          display: grid;
          grid-template-columns: 2.5fr 1fr 1fr;
          gap: 2rem;
        }

        .filter-group label {
          display: block;
          font-family: var(--font-header);
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        /* Table Card */
        .table-card {
          padding: 0;
          clip-path: none;
          border-radius: 8px;
          overflow: hidden;
        }

        .table-responsive {
          overflow-x: auto;
          width: 100%;
        }

        .users-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.9rem;
        }

        .users-table th {
          background-color: var(--bg-secondary);
          color: var(--text-secondary);
          font-family: var(--font-header);
          font-weight: 800;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 1.2rem 1.5rem;
          border-bottom: 2px solid var(--border-color);
        }

        .users-table td {
          padding: 1.2rem 1.5rem;
          border-bottom: 1px solid var(--bg-secondary);
          color: var(--text-secondary);
        }

        .users-table tr:last-child td {
          border-bottom: none;
        }

        .users-table tr:hover td {
          background-color: var(--bg-secondary);
          color: var(--text-primary);
        }

        .gamertag-badge {
          background-color: #f3f4f6;
          border: 1px solid var(--border-color);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.85rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .role-label {
          background-color: var(--accent-glow);
          color: var(--accent-dark);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .msg-count-badge {
          background-color: var(--border-color);
          color: var(--text-secondary);
          font-size: 0.8rem;
          padding: 0.2rem 0.5rem;
          border-radius: 99px;
          font-weight: 600;
          cursor: help;
        }

        .table-actions {
          display: flex;
          gap: 0.5rem;
        }

        .action-btn {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          border: 1.5px solid var(--border-color);
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
          font-size: 0.95rem;
        }

        .action-btn.edit:hover {
          background-color: #dbeafe;
          border-color: #3b82f6;
          color: #2563eb;
        }

        .action-btn.msg:hover {
          background-color: var(--accent-glow);
          border-color: var(--accent-color);
          color: var(--accent-dark);
        }

        .action-btn.delete:hover {
          background-color: #fee2e2;
          border-color: #ef4444;
          color: #dc2626;
        }

        .no-results {
          padding: 3rem !important;
          color: var(--text-light) !important;
          font-style: italic;
        }

        /* Success Toast */
        .success-toast {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background-color: #0b130e;
          color: white;
          border-left: 5px solid var(--accent-color);
          padding: 1.2rem 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          z-index: 1000;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          border-radius: 4px;
        }

        .toast-icon {
          background-color: var(--accent-color);
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        /* Modal styling */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(11, 19, 14, 0.7);
          backdrop-filter: blur(4px);
          z-index: 500;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-content {
          max-width: 550px;
          width: 90%;
          border-color: var(--accent-color);
          animation: fadeIn 0.3s var(--transition-smooth);
        }

        .messaging-modal {
          max-width: 650px;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          border-bottom: 1.5px solid var(--border-color);
          padding-bottom: 0.75rem;
        }

        .modal-header h3 {
          font-size: 1.4rem;
          color: var(--text-primary);
        }

        .close-modal-btn {
          background: none;
          border: none;
          font-size: 2.2rem;
          color: var(--text-light);
          cursor: pointer;
          line-height: 0.5;
          transition: var(--transition-fast);
        }

        .close-modal-btn:hover {
          color: #ef4444;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
        }

        .textarea-input {
          min-height: 150px;
          resize: vertical;
          clip-path: none !important;
          border-radius: 6px;
        }

        .recipient-summary {
          background-color: var(--bg-secondary);
          padding: 1rem;
          border-radius: 6px;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          border: 1px solid var(--border-color);
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 2rem;
          border-top: 1px solid var(--border-color);
          padding-top: 1.5rem;
        }

        /* Message History Section */
        .message-history {
          margin-top: 2rem;
          border-top: 1.5px solid var(--border-color);
          padding-top: 1.5rem;
        }

        .message-history h4 {
          font-size: 0.95rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .history-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          max-height: 150px;
          overflow-y: auto;
          padding-right: 0.5rem;
        }

        .history-item {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          padding: 0.75rem;
          border-radius: 4px;
        }

        .history-item-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }

        .history-item-header strong {
          color: var(--text-primary);
        }

        .history-item p {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .filters-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .dash-header-actions {
            width: 100%;
          }
          
          .dash-header-actions button {
            flex-grow: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
