import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const NewQuestionButton = styled(RectButton)`
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background: #ee4d64;
  border-radius: 4px;
  padding: 0 12px;
  height: 44px;
`;
export const NewQuestionButtonText = styled.Text`
  color: #eee;
  font-size: 16px;
  font-weight: bold;
`;
export const QuestionList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;
export const Question = styled(RectButton)`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin-top: 10px;
`;

export const StatusQuestion = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StatusText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: 5px;
  color: ${props => (props.status ? '#42cb59' : '#999')};
`;

export const QuestionDate = styled.Text`
  font-size: 14px;
  color: #999;
`;

export const View = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const QuestionText = styled.Text.attrs({
  numberOfLines: 2,
})`
  margin-top: 5px;
  font-size: 16px;
`;
