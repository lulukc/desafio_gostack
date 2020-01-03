import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  background: #ee4d64;
`;

export const Form = styled.View`
  align-self: stretch;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 30px;
  border-radius: 6px;
`;
export const FormInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  align-self: stretch;
  margin-top: 30px;
  font-size: 16px;
  border: #666;
  border-radius: 4px;
  height: 44px;
`;
export const SubmitButton = styled(RectButton)`
  align-self: stretch;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  background: #ee4d64;
  border-radius: 4px;
  padding: 0 12px;
  height: 44px;
`;
export const SubmitButtonText = styled.Text`
  color: #eee;
  font-size: 16px;
  font-weight: bold;
`;
