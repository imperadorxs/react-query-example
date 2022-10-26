import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: #121214;
  color: #ccc;

  h1 {
    margin: 0;
    padding: 2rem 0;
  }
`;

export const TodoList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  font-size: 2rem;
`;
