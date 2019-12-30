/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import api from '~/services/api';
import { Container, Headers, Entries, StudentTable } from './styles';
import { reloadDataRequest } from '~/store/modules/data/actions';

export default function PlansList() {
  const dispatch = useDispatch();
  const plans = useSelector(state => state.data.plansList);
  const loading = useSelector(state => state.data.loading);

  async function handleDelet(id) {
    await api.delete(`plans/${id}`);
    dispatch(reloadDataRequest());
    window.location.reload(false);
  }

  if (loading) {
    return <h1>caregando</h1>;
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
