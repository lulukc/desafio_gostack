/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import api from '~/services/api';
import { Container, Headers, Entries, StudentTable } from './styles';

export default function StudentList() {
  const [stutents, setStutents] = useState([]);

  useEffect(() => {
    async function getStudents() {
      const response = await api.get('student');
      setStutents(response.data);
    }
    getStudents();
  }, []);

  async function handleDelet(id) {
    await api.delete(`student/${id}`);
  }

  return (
    <Container>
      <Headers>
        <strong>Gerenciando alunos</strong>
        <Entries>
          <button type="button">
            <MdAdd size="20px" color="#fff" />
            <Link to="/studentform">Catastrar</Link>
          </button>
          <input type="text" placeholder="Busca alunos" />
        </Entries>
      </Headers>
      <StudentTable>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {stutents.map(stutent => (
            <tr>
              <td>{stutent.name}</td>
              <td>{stutent.email}</td>
              <td>{stutent.idade}</td>
              <td>
                <Link to="/studentedition">editar</Link>
                <button type="button" onClick={() => handleDelet(stutent.id)}>
                  apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </StudentTable>
    </Container>
  );
}
