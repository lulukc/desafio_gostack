/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
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

export default function StudentEdition({ match }) {
  const dispatch = useDispatch();
  const studentslist = useSelector(state => state.data.studentsList);
  const [student, setStudent] = useState([]);

  useEffect(() => {
    const { id } = match.params;
    const studentFilter = studentslist.filter(students => students.id == id);

    setStudent(studentFilter);
  }, [match, match.params, studentslist]);

  function handleBack() {
    history.push('/studentlist');
  }
  async function handleSubmit(data) {
    const { id } = student[0];
    const response = await api.put(`student/${id}`, data);

    if (response.data) {
      dispatch(reloadDataRequest());
      history.push('/studentlist');
    }
  }

  return (
    <Container>
      <Form initialData={student[0]} onSubmit={handleSubmit}>
        <Header>
          <strong>Edição de aluno</strong>
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

StudentEdition.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string,
    }),
  }).isRequired,
};
