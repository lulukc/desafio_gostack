import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  width: auto;
  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  strong {
    font-size: 24px;
    margin-right: 20px;
  }
`;

export const FormStudent = styled.div`
  margin-top: 30px;
  background: #fff;
  border-radius: 4px;
  display: grid;
  padding: 10px;
  color: #000;
  font-size: 18px;
  font-weight: bold;

  strong {
    padding: 5px;
  }

  input {
    height: 30px;
  }

  thead th {
    text-align: left;
    padding: 5px;
  }
  tbody td {
    padding-right: 5px;
    width: 200px;
  }
`;

export const BackButton = styled.button`
  text-align: center;
  align-items: center;
  margin-right: 10px;
  padding: 10px;
  background: #999;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;
export const SubmitButtons = styled.button`
  text-align: center;
  align-items: center;
  margin-right: 10px;
  padding: 10px;
  background: #ee4d64;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;
