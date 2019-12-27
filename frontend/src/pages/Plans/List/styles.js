import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 30px;
`;
export const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;

  strong {
    font-size: 24px;
  }
`;
export const Entries = styled.div`
  button {
    background: #ee4d64;
    border-radius: 4px;
    padding: 4px;
    align-items: center;
    text-align: center;
    height: 44px;
    padding: 10px;
    margin-right: 10px;

    a {
      color: #fff;
      font-weight: bold;
      text-align: center;
    }
  }
  input {
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    height: 44px;
    margin: 5px 0 10px;
    padding: 10px;
  }
`;

export const StudentTable = styled.table`
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
