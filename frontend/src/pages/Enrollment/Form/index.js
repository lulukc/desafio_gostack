import React, { useState, useEffect, useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import { addMonths, format } from 'date-fns';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import Select from 'react-select';
import DatePiker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';

import history from '~/services/history';
import { formatPrice } from '~/util/format';
import {
  Container,
  BackButton,
  FormStudent,
  Header,
  SubmitButtons,
} from './styles';
import api from '~/services/api';
import { reloadDataRequest } from '~/store/modules/data/actions';

export default function EnrollmentForm() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const [date, setDate] = useState(new Date());
  const [optiosStudents, setOptiosStudents] = useState([]);
  const [optiosPlans, setOptiosPlans] = useState([]);
  const [selectedOptionStudent, setSelectedOptionStudent] = useState(null);
  const [selectedOptionPlan, setSelectedOptionPlan] = useState(null);

  registerLocale('pt', pt);

  useEffect(() => {
    const { plansList, studentsList } = data;
    const student = studentsList.map(student => ({
      ...student,
      value: student.name,
      label: student.name,
    }));
    const plan = plansList.map(plan => ({
      ...plan,
      value: plan.title,
      label: plan.title,
    }));
    setOptiosStudents(student);
    setOptiosPlans(plan);
  }, [data]);

  function handleChangeDate(date) {
    setDate(date);
  }
  function handleChangeSelectStudent(selectedOptionStudent) {
    setSelectedOptionStudent(selectedOptionStudent);
  }
  function handleChangeSelectPlan(selectedOptionPlan) {
    setSelectedOptionPlan(selectedOptionPlan);
  }
  const finalDate = useMemo(() => {
    const duration = selectedOptionPlan ? selectedOptionPlan.duration : '1';
    return format(addMonths(date, duration), "dd 'de' MMMM 'de' yyyy", {
      locale: pt,
    });
  }, [date, selectedOptionPlan]);

  const finalPrice = useMemo(() => {
    const price = selectedOptionPlan
      ? selectedOptionPlan.price * selectedOptionPlan.duration
      : 0;
    return formatPrice(price);
  }, [selectedOptionPlan]);

  function handleBack() {
    history.push('/enrollmentlist');
  }
  async function handleSubmit() {
    const response = await api.post('enrollment', {
      email_student: selectedOptionStudent.email,
      name_plan: selectedOptionPlan.title,
      start_date: date,
    });

    if (response.data) {
      dispatch(reloadDataRequest());
      history.push('/enrollmentlist');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>
          <strong>Cadastro de matricula</strong>
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
          <strong>Nome do aluno</strong>
          <Select
            value={selectedOptionStudent}
            options={optiosStudents}
            onChange={handleChangeSelectStudent}
          />
          <table>
            <thead>
              <tr>
                <th>Plano</th>
                <th>Data de Inicio</th>
                <th>Data de termino</th>
                <th>Valor final</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Select
                    value={selectedOptionPlan}
                    options={optiosPlans}
                    onChange={handleChangeSelectPlan}
                  />
                </td>
                <td>
                  <DatePiker
                    selected={date}
                    onChange={handleChangeDate}
                    locale="pt"
                    dateFormat="d 'de' MMMM 'de' yyyy"
                  />
                </td>
                <td>
                  <Input name="finalDate" value={finalDate} />
                </td>
                <td>
                  <Input name="finalprice" value={finalPrice} />
                </td>
              </tr>
            </tbody>
          </table>
        </FormStudent>
      </Form>
    </Container>
  );
}
