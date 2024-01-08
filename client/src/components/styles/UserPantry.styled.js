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
    color: #EA654E;
    &:hover {
      color: #ff5252;
    }
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
      justify-content: space-between;
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

  .big-button {
    /* display: flex; */
    text-decoration: none;
    width: 150px;
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

  .change-quantity-button {
    display: flex;
  text-decoration: none;
  width: 100px;
  height: 35px;
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

  .list-item{
    color: #EA654E;
    &:hover {
      color: #FFE5B4;
    }
  }

  .list-item{
    color: #EA654E;
    &:hover {
      color: #FFE5B4;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .grid > span {
    color: white;
  }

  .grid-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-list a {
    display: flex;
    align-items: center;
  }

  label[for="search"] {
    color: white;
    font-size: 25px;
  }

  #search-container {
    display: flex;
    height: 75px;
    justify-content: center;
    align-items: center;
  }

`