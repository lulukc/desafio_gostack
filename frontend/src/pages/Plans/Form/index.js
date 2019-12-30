import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import { MdChevronLeft, MdCheck } from 'react-icons/md';

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

export default function PlansForm() {
  const dispatch = useDispatch();
  function handleBack() {
    history.push('/planslist');
  }
  async function handleSubmit(data) {
    const response = await api.post('plans', data);

    if (response.data) {
      dispatch(reloadDataRequest());
      history.push('/planslist');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>
          <strong>Cadastro de planos</strong>
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
