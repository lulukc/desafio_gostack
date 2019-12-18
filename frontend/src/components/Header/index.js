import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Links, User } from './styles';
import logo from '~/assets/logo2.png';
import { logoff } from '~/store/modules/auth/actions';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleLogoff() {
    dispatch(logoff());
  }

  return (
    <Container>
      <Links>
        <img src={logo} alt="GYMPOINT" />
        <Link to="/studentlist">Alunos</Link>
        <Link to="/planslist">Planos</Link>
        <Link to="/enrollmentlist">Matrícula</Link>
        <Link to="/questions">Pedidos de auxílio</Link>
      </Links>
      <User>
        <strong>{profile.name}</strong>
        <button type="button" onClick={handleLogoff}>
          Sair
        </button>
      </User>
    </Container>
  );
}
