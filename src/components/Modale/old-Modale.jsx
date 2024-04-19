import React, { useState, useEffect } from 'react';
import './modale.scss';

function AdminPanel() {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:5678/api/works');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const deleteProject = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`http://localhost:5678/api/works/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'accept': '*/*',
          'authorization': `Bearer ${token}`,
        },
      });
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const toggleAddProject = () => {
    setShowAddProject(!showAddProject);
  };

  return (
    <div className="admin-panel">
      <div className="project-gallery">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <img src={project.imageUrl} alt={project.title} />
            <p>{project.title}</p>
            <button onClick={() => openModal(project)}>Edit</button>
            <button onClick={() => deleteProject(project.id)}>Delete</button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
          </div>
        </div>
      )}

      {showAddProject && (
        <div className="add-project-form">
        </div>
      )}

      <button onClick={toggleAddProject}>Add Project</button>
    </div>
  );
}

export default AdminPanel;
