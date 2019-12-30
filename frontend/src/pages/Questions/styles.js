import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 30px;

  header {
    font-size: 20px;
    color: #000;
    font-weight: bold;
  }
`;
export const QuestionsList = styled.table`
  width: 100%;
  margin-top: 30px;
  background: #fff;
  border-radius: 4px;

  thead th {
    color: #333;
    text-align: left;
    padding: 12px;
  }
  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
  button {
    color: red;
    padding-left: 10px;
    background: none;
  }
`;

export const FormAnswer = styled.form`
  display: grid;
  border-radius: 4px;
  padding: 12px;

  strong {
    margin: 5px 0;
    font-size: 16px;
    font-weight: bold;
  }
  input {
    flex: 1;
    border: 1px solid #333;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 14px;
    height: 44px;
  }

  button {
    background: #ee4d64;
    color: #fff;
    border: 0;
    padding: 5px;
    border-radius: 4px;
    margin-top: 10px;
    font-size: 16px;
    width: auto;
    font-weight: bold;

    &:hover {
      background: ${darken(0.3, '#ee4d64')};
    }
  }
`;
