import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  background: #ee4d64;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 4px;
  width: 100%;
  max-width: 315px;
  text-align: center;
  padding: 10px;
  box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.5);

  img {
    margin-top: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 0 30px;
    text-align: left;

    p {
      margin-top: 10px;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    input {
      border: 1px solid #dcdcdc;
      border-radius: 4px;
      height: 44px;
      margin: 5px 0 10px;
      padding: 0 10px;
    }
    button {
      margin: 10px 0;
      width: 100%;
      color: #fff;
      background: #ee4d64;
      border-radius: 4px;
      padding: 10px;
      font-weight: bold;
      font-size: 18px;

      &:hover {
        background: ${darken(0.3, '#ee4d64')};
      }
    }
  }
`;
