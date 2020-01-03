import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SubmitButtonText,
} from './styles';
import { loginRequest } from '~/store/modules/user/actions';

export default function Login() {
  const dispatch = useDispatch();
  const [id, setId] = useState('');

  function handleSubmit() {
    dispatch(loginRequest(id));
  }
  return (
    <Container>
      <Form>
        <Image source={logo} />
        <FormInput
          placeholder="Informe o seu ID de cadastro"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={id}
          onChangeText={setId}
        />
        <SubmitButton onPress={handleSubmit}>
          <SubmitButtonText>Entrar no sistema</SubmitButtonText>
        </SubmitButton>
      </Form>
    </Container>
  );
}
