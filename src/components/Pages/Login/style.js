import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e8e8e8;
  height: 100vh;
`;

export const Form = styled.form`
  width: 400px;
  background: #181818;
  padding: 20px;
  box-shadow: 8px 10px 1px 0px rgba(255,210,0,1);
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  input {
    flex: 1;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 10px;
    :hover{
      box-shadow: 3px 3px 2px 0px rgba(255,210,0,1);
    }
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #ffcf40;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #ffcf40;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #ddd;
    :hover{
      color: #ddd;
      border: 1px solid #ffcf40;
      box-shadow: 2px 2px 1px 0px rgba(255,210,0,1);
    }
  }
`;
