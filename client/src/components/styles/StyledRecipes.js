import styled from "styled-components";

export const StyledRecipes = styled.div`
  text-align: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }

  h1 {
    color: #EF6351;
  }

  h2 {
    color: #EF6351;
  }

  button {
    display: flex;
    text-decoration: none;
    font-size: 16px;
    width: 190px;
    height: 45px;
    padding: 8px 5px 10px 5px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 10px;
    border: none;
    background: #F6A192;
    color: #FFE5B4;
    outline: 0;
    cursor: pointer;
    transition: ease background-color 250ms;
    &:hover {
    background-color: #ff5252;
    }
  }
`