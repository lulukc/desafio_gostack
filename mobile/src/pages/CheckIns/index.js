import React, { useState, useEffect } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
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

export default function CheckIns() {
  const student = useSelector(state => state.user.student);
  const [loading, setLoading] = useState(false);
  const [checkins, setCheckins] = useState([]);

  useEffect(() => {
    async function getCheckins() {
      setLoading(true);
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
      setLoading(false);
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
      Alert.alert('Novo check-In', `Foi realizado o Check-In no dia ${date}`);
    } catch (error) {
      Alert.alert(
        'Não foi possivel realizar o check-In',
        `Você so pode realizar 5 check-Ins no periode de 7 dias`
      );
    }
  }

  if (loading) {
    return (
      <Background>
        <ActivityIndicator size="large" color="#fff" />
      </Background>
    );
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
      />
    </Background>
  );
}
