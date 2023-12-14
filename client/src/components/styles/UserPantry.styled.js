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

`