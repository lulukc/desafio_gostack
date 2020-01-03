import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  AnswerContent,
  AnswerText,
  AnswerContainer,
  Question,
  QuestionText,
  QuestionContent,
} from './styles';
import { Background } from '~/components/Background';

export default function Answer({ navigation }) {
  const questions = useSelector(state => state.question.question);
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    const { id } = navigation.state.params;
    const quest = questions.filter(q => q.id === id);
    setQuestion(quest[0]);
  }, [navigation.state.params, questions]);

  return (
    <Background>
      <Question>
        <QuestionText>Pergunta</QuestionText>
        <QuestionContent>{question.question}</QuestionContent>
      </Question>
      <AnswerContainer>
        <AnswerText>Resposta</AnswerText>
        {question.answer ? (
          <AnswerContent>{question.answer}</AnswerContent>
        ) : (
          <AnswerContent>Sem resposta ainda</AnswerContent>
        )}
      </AnswerContainer>
    </Background>
  );
}

Answer.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number,
      }),
    }),
  }).isRequired,
};
