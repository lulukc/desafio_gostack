import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const CheckinButton = styled(RectButton)`
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background: #ee4d64;
  border-radius: 4px;
  padding: 0 12px;
  height: 44px;
`;
export const CheckinButtonText = styled.Text`
  color: #eee;
  font-size: 16px;
  font-weight: bold;
`;

export const CheckinList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  margin-top: 20px;
`;
export const CheckIn = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 4px;
  padding: 0 12px;
  margin-top: 10px;
  width: 100%;
  height: 44px;
`;
export const CheckinListText = styled.Text`
  font-size: 18;
  font-weight: bold;
`;
export const CheckinDate = styled.Text`
  font-size: 14px;
  color: #999;
`;
