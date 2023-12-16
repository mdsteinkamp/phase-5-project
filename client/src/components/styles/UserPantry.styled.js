import styled from "styled-components"

export const StyledUserPantry = styled.div`

  h1 {
    color: #EA654E;
    text-align: center;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .navlink {
    display: flex;
    height: 30px;
  }


  h3 {
    color: white;
  }

  h4 {
    color: white;
  }

  /* container */
  .responsive-three-columns {
      display:flex;
      flex-wrap:wrap;
  }

  /* container */
  .three-columns {
      display:flex;
  }

  /* columns */
  .three-columns > * {
      width:calc(100% / 3);
      padding:1rem;
  }

  /* container */
  .four-columns {
      display:flex;
  }

  /* columns */
  .four-columns > * {
      width:calc(100% / 4);
      padding:1rem;
  }

  ul {
  list-style: none;
  margin: 0;
  padding: 0;
  }

  button {
  display: flex;
  text-decoration: none;
  width: 100px;
  height: 26px;
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