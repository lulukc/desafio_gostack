/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAdd, MdOfflinePin } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import { Container, Headers, Entries, StudentTable } from './styles';
import { enrollmentRequest } from '~/store/modules/enrollment/actions';

export default function EnrollmentList() {
  const dispatch = useDispatch();
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    async function getEnrollments() {
      const response = await api.get('enrollment');

      const data = response.data.map(enrollment => ({
        ...enrollment,
        startDateFormated: format(
          parseISO(enrollment.start_date),
          "dd 'de' MMMM 'de' yyyy",
          {
            locale: pt,
          }
        ),
        endDateFormated: format(
          parseISO(enrollment.end_date),
          "dd 'de' MMMM 'de' yyyy",
          {
            locale: pt,
          }
        ),
      }));

      setEnrollments(data);
      dispatch(enrollmentRequest(data));
    }
    getEnrollments();
  }, [dispatch]);

  async function handleDelet(id) {
    await api.delete(`enrollment/${id}`);
    window.location.reload(false);
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
                <Link to={`/enrollmentedition/${enrollment.id}`}>editar</Link>
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
