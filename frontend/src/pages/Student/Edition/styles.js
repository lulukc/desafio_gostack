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
  }
`;

export const FormStudent = styled.div`
  margin-top: 30px;
  background: #fff;
  border-radius: 4px;
  display: grid;
  padding: 10px;

  input {
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    height: 30px;
    margin: 5px 0 10px;
    padding: 0 10px;
  }
  thead th {
    color: #333;
    text-align: left;
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
