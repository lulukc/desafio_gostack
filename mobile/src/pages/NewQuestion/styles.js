import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const FormInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  margin-top: 30px;
  font-size: 18px;
  border-radius: 4px;
  height: 400px;
  padding: 10px;
  background: #fff;
  line-height: 25px;
`;
export const SubmitButton = styled(RectButton)`
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

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;
