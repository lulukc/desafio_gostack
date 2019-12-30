/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import api from '~/services/api';
import { Container, Headers, Entries, StudentTable } from './styles';
import { reloadDataRequest } from '~/store/modules/data/actions';

export default function StudentList() {
  const dispatch = useDispatch();
  const students = useSelector(state => state.data.studentsList);
  const loading = useSelector(state => state.data.loading);

  async function handleDelet(id) {
    await api.delete(`student/${id}`);
    dispatch(reloadDataRequest());
    window.location.reload(false);
  }

  if (loading) {
    return <h1>caregando</h1>;
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
