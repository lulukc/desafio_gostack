import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.png';
import { loginRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('e-mail inválido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(loginRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Logo" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <p>Seu e-mail</p>
        <Input name="email" type="email" placeholder="exemplo@exemplo.com" />
        <p>Sua senha</p>
        <Input name="password" type="password" placeholder="********" />
        <button type="submit">{loading ? 'caregando...' : 'Acessar'}</button>
      </Form>
    </>
  );
}
