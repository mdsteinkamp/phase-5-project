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
`