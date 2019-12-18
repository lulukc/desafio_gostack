import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 10px;

  img {
    border-right: 1px solid #999;
    padding-right: 10px;
    margin-right: 10px;
  }
  a {
    margin: 10px;
    color: #333;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const User = styled.div`
  text-align: right;
  align-items: right;
  margin-right: 20px;

  strong {
    display: block;
    color: #333;
    font-size: 18px;
    font-weight: bold;
  }
  button {
    display: block;
    margin-top: 2px;
    font-size: 14px;
    color: #ee4d64;
    background: none;
    font-weight: bold;
  }
`;
