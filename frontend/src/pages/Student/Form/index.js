import React from 'react';
import { Form, Input } from '@rocketseat/unform';
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

export default function StudentForm() {
  function handleBack() {
    history.push('/studentlist');
  }
  async function handleSubmit(data) {
    const response = await api.post('student', data);

    if (response.data) {
      history.push('/studentlist');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>
          <strong>Cadastro de aluno</strong>
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
          <strong>Nome Completo</strong>
          <Input name="name" type="text" placeholder="nome" />
          <strong>E-mail</strong>
          <Input name="email" type="email" placeholder="email" />
          <table>
            <thead>
              <tr>
                <th>Idade</th>
                <th>Altura</th>
                <th>Peso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Input name="idade" type="idade" placeholder="idade" />
                </td>
                <td>
                  <Input name="altura" type="altura" placeholder="altura" />
                </td>
                <td>
                  <Input name="peso" type="peso" placeholder="peso" />
                </td>
              </tr>
            </tbody>
          </table>
        </FormStudent>
      </Form>
    </Container>
  );
}
