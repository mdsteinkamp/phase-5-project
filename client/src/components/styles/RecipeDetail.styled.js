import styled from "styled-components";

export const StyledRecipeDetails = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: column;

  ul {
    margin: 0;
    padding: 0;
  }

  h1 {
    color: #EF6351;
    text-align: center;
  }

  h2 {
    color: #EF6351;
  }

  h3 {
    color: #EF6351;
  }

  p {
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

  .display-linebreak {
    white-space: pre-line;
  }
`