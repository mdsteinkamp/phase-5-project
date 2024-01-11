import styled from "styled-components";

export const StyledRecipes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  #all-recipes-container {
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: flex-start;
    width: 100%
  }

  #buttons-container {
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: flex-start;
  }


  h1 {
    color: #EF6351;
  }

  h2 {
    display: flex;
    align-self: center;

    color: #EF6351;
  }

  h3 {
    display: flex;
    justify-content: center;
    color: #EF6351;
    align-self: center;
  }

  p {
    display: flex;
    align-self: center;
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

  ul {
    padding: 0;
  }

  /* .navlink {
    display: flex;
    justify-content: center;
    align-self: center;
  } */
`