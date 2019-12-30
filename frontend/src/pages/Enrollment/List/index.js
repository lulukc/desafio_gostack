/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAdd, MdOfflinePin } from 'react-icons/md';

import api from '~/services/api';
import { Container, Headers, Entries, StudentTable } from './styles';
import { reloadDataRequest } from '~/store/modules/data/actions';

export default function EnrollmentList() {
  const dispatch = useDispatch();
  const enrollments = useSelector(state => state.data.enrollmentList);
  const loading = useSelector(state => state.data.loading);

  async function handleDelet(id) {
    await api.delete(`enrollment/${id}`);
    dispatch(reloadDataRequest);
    window.location.reload(false);
  }

  if (loading) {
    return <h1>caregando</h1>;
  }
  return (
    <Container>
      <Headers>
        <strong>Gerenciando matriculas</strong>
        <Entries>
          <button type="button">
            <MdAdd size="20px" color="#fff" />
            <Link to="/enrollmentform">Catastrar</Link>
          </button>
        </Entries>
      </Headers>
      <StudentTable>
        <thead>
          <tr>
            <th>Aluno</th>
            <th>Plano</th>
            <th>Início</th>
            <th>Término</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {enrollments.map(enrollment => (
            <tr key={enrollment.id}>
              <td>{enrollment.student.name}</td>
              <td>{enrollment.plan.title}</td>
              <td>{enrollment.startDateFormated}</td>
              <td>{enrollment.endDateFormated}</td>
              <td>
                {enrollment.active === true ? (
                  <MdOfflinePin color="#42cb59" size="20px" />
                ) : (
                  <MdOfflinePin color="#dddddd" size="20px" />
                )}
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleDelet(enrollment.id)}
                >
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
