import styled from "styled-components"
import { Link } from "react-router-dom"


export const PantryNavlink = styled(Link)`
  display: flex;
  text-decoration: none;
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

  .create-recipe-button {
    display: flex;
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

`