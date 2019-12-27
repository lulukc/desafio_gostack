/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import api from '~/services/api';
import { formatPrice } from '~/util/format';
import { Container, Headers, Entries, StudentTable } from './styles';
import { plansRequest } from '~/store/modules/plans/actions';

export default function PlansList() {
  const dispatch = useDispatch();
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function getStudents() {
      const response = await api.get('plans');
      const data = response.data.map(plan => ({
        ...plan,
        priceFormatted: formatPrice(plan.price),
      }));
      setPlans(data);
      dispatch(plansRequest(data));
    }
    getStudents();
  }, [dispatch]);

  console.tron.log(typeof plansRequest, 'plans');

  async function handleDelet(id) {
    await api.delete(`plans/${id}`);
    window.location.reload(false);
  }

  return (
    <Container>
      <Headers>
        <strong>Gerenciando planos</strong>
        <Entries>
          <button type="button">
            <MdAdd size="20px" color="#fff" />
            <Link to="/plansform">Catastrar</Link>
          </button>
        </Entries>
      </Headers>
      <StudentTable>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Duração</th>
            <th>Valor por mês</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {plans.map(plan => (
            <tr key={plan.id}>
              <td>{plan.title}</td>
              <td>
                {plan.duration == 1
                  ? `${plan.duration} mês`
                  : `${plan.duration} meses`}
              </td>
              <td>{plan.priceFormatted}</td>
              <td>
                <Link to={`/plansedition/${plan.id}`}>editar</Link>
                <button type="button" onClick={() => handleDelet(plan.id)}>
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
