/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import api from '~/services/api';
import { Container, Headers, Entries, StudentTable } from './styles';
import { studentsRequest } from '~/store/modules/students/actions';

export default function StudentList() {
  const dispatch = useDispatch();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getStudents() {
      const response = await api.get('student');
      const { data } = response;
      setStudents(data);
      dispatch(studentsRequest(data));
    }
    getStudents();
  }, [dispatch]);

  async function handleDelet(id) {
    await api.delete(`student/${id}`);
    window.location.reload(false);
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
          {students.map(stutent => (
            <tr key={stutent.id}>
              <td>{stutent.name}</td>
              <td>{stutent.email}</td>
              <td>{stutent.idade}</td>
              <td>
                <Link to={`/studentedition/${stutent.id}`}>editar</Link>
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
