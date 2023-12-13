import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 100px;
  background-color: #f6a192;
  text-align: left;
  width: 100%;

  h1 {
    color: rgba(233, 232, 236, 0.952);
  }

  button {
    display: flex;
    width: 96px;
    height: 26pxpx;
    padding: 8px 5px 10px 5px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 10px;
    border: none;
    background: #EA654E;
    color: #FFE5B4;
    outline: 0;
    cursor: pointer;
    transition: ease background-color 250ms;
    &:hover {
    background-color: #ff5252;
    }
  }

  .button-div {
    position: absolute;
    right: 0px;
  }

`