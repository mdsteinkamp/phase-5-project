import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeNavLink = styled(Link)`
  display: flex;
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
  /* box-shadow: 0px 2px 2px lightgray; */
  text-transform: uppercase;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #ff5252;
  }
`