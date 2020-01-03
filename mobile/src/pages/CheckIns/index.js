import React, { useState, useEffect, useCallback } from 'react';
import { Alert, RefreshControl } from 'react-native';
import { useSelector } from 'react-redux';
import { parseISO, formatDistance, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import {
  CheckinButton,
  CheckinButtonText,
  CheckinList,
  CheckIn,
  CheckinListText,
  CheckinDate,
} from './styles';
import { Background } from '~/components/Background';

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function CheckIns() {
  const student = useSelector(state => state.user.student);

  const [checkins, setCheckins] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    async function getCheckins() {
      const { id } = student;
      const response = await api.get(`student/${id}/checkins`);
      const data = response.data.map(checkins => ({
        ...checkins,
        timeDistance: formatDistance(parseISO(checkins.createdAt), new Date(), {
          addSuffix: true,
          locale: pt,
        }),
      }));
      setCheckins(data);
    }
    getCheckins();
  }, [student]);

  async function handleNewCheck() {
    try {
      const { id } = student;
      await api.post(`student/${id}/checkins`);
      const date = format(new Date(), "dd 'de' MMM 'ás' HH':'mm", {
        locale: pt,
      });
      Alert.alert(
        'Novo check-In',
        `Foi realizado o Check-In no dia ${date}`,
        [
          {
            text: 'OK',
            onPress: () => onRefresh(),
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      Alert.alert(
        'Não foi possivel realizar o check-In',
        `Você so pode realizar 5 check-Ins no periode de 7 dias`,
        [{ text: 'OK', onPress: () => console.tron.log('OK Pressed') }],
        { cancelable: false }
      );
    }
  }

  return (
    <Background>
      <CheckinButton onPress={handleNewCheck}>
        <CheckinButtonText>Novo Check-In</CheckinButtonText>
      </CheckinButton>
      <CheckinList
        data={checkins}
        keyExatractor={checkin => String(checkin.checkin_Number)}
        renderItem={({ item: checkin }) => (
          <CheckIn>
            <CheckinListText>{`Check-In #${checkin.checkin_Number}`}</CheckinListText>
            <CheckinDate>{checkin.timeDistance}</CheckinDate>
          </CheckIn>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </Background>
  );
}
