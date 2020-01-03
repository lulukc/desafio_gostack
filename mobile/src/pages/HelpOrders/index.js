import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  NewQuestionButton,
  NewQuestionButtonText,
  QuestionList,
  Question,
  StatusQuestion,
  StatusText,
  QuestionDate,
  QuestionText,
  View,
} from './styles';
import { Background } from '~/components/Background';
import { questionRequest } from '~/store/modules/question/actions';

export default function HelpOrders({ navigation }) {
  const student = useSelector(state => state.user.student);
  const questions = useSelector(state => state.question.question);
  const loading = useSelector(state => state.question.loading);

  const dispatch = useDispatch();

  function handleNavigateNewQuestion() {
    navigation.navigate('newQuestion');
  }
  function handleNavigateAnswer(id) {
    navigation.navigate('answer', {
      id,
    });
  }

  useEffect(() => {
    const { id } = student;
    dispatch(questionRequest(id));
  }, [dispatch, student]);

  if (loading) {
    return (
      <Background>
        <ActivityIndicator size="large" color="#fff" />
      </Background>
    );
  }

  return (
    <Background>
      <NewQuestionButton onPress={handleNavigateNewQuestion}>
        <NewQuestionButtonText>Nova pergunta</NewQuestionButtonText>
      </NewQuestionButton>
      <QuestionList
        data={questions}
        keyExatractor={question => question.id}
        renderItem={({ item: question }) => (
          <Question onPress={() => handleNavigateAnswer(question.id)}>
            <StatusQuestion>
              {question.answer_at ? (
                <View>
                  <Icon name="check-circle" size={20} color="#42cb59" />
                  <StatusText status={question.answer_at}>
                    Respondido
                  </StatusText>
                </View>
              ) : (
                <View>
                  <Icon name="check-circle" size={20} color="#999" />
                  <StatusText status={question.answer_at}>
                    Sem resposta
                  </StatusText>
                </View>
              )}
              <QuestionDate>{question.timeDistance}</QuestionDate>
            </StatusQuestion>
            <QuestionText>{question.question}</QuestionText>
          </Question>
        )}
      />
    </Background>
  );
}

HelpOrders.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
