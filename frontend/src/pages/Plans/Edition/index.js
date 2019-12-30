/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import Proptypes from 'prop-types';

import history from '~/services/history';
import {
  Container,
  BackButton,
  FormStudent,
  Header,
  SubmitButtons,
} from './styles';

import api from '~/services/api';
import { reloadDataRequest } from '~/store/modules/data/actions';

export default function PlansEdition({ match }) {
  const dispatch = useDispatch();
  const plansList = useSelector(state => state.data.plansList);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const { id } = match.params;
    const plansFilter = plansList.filter(plan => plan.id == id);

    setPlans(plansFilter);
  }, [match, match.params, plansList]);

  function handleBack() {
    history.push('/planslist');
  }
  async function handleSubmit(data) {
    const { id } = plans[0];
    const response = await api.put(`plans/${id}`, data);

    if (response.data) {
      dispatch(reloadDataRequest());
      history.push('/planslist');
    }
  }

  return (
    <Container>
      <Form initialData={plans[0]} onSubmit={handleSubmit}>
        <Header>
          <strong>Edição de planos</strong>
          <div>
            <BackButton type="button" onClick={handleBack}>
              <MdChevronLeft size="20px" color="#fff" />
              Voltar
            </BackButton>
            <SubmitButtons type="submit">
              <MdCheck size="20px" color="#fff" />
              Salvar
            </SubmitButtons>
          </div>
        </Header>
        <FormStudent>
          <strong>Título do plano</strong>
          <Input name="title" type="text" />
          <table>
            <thead>
              <tr>
                <th>Duração (em meses)</th>
                <th>Preço mensal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Input name="duration" type="number" />
                </td>
                <td>
                  <Input name="price" type="number" />
                </td>
              </tr>
            </tbody>
          </table>
        </FormStudent>
      </Form>
    </Container>
  );
}

PlansEdition.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string,
    }),
  }).isRequired,
};
