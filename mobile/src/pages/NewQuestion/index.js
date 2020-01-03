import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Container, SubmitButtonText, SubmitButton, FormInput } from './styles';
import { Background } from '~/components/Background';
import api from '~/services/api';

export default function NewQuestion({ navigation }) {
  const student = useSelector(state => state.user.student);
  const [question, setQuestion] = useState('');
  async function handleSubmit() {
    const { id } = student;
    await api.post(`student/${id}/help-orders`, {
      question,
    });
    navigation.navigate('helpOrders');
  }

  return (
    <Background>
      <Container>
        <FormInput
          placeholder="Digite a sua pergunta"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={question}
          onChangeText={setQuestion}
          multiline
          style={{ textAlignVertical: 'top' }}
        />
        <SubmitButton onPress={handleSubmit}>
          <SubmitButtonText>Enviar pergunta</SubmitButtonText>
        </SubmitButton>
      </Container>
    </Background>
  );
}

NewQuestion.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
