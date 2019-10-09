import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { ListOl } from 'styled-icons/fa-solid'
import { FileAlt } from 'styled-icons/fa-regular'

export default function Navigation({ active }) {
  return (
    <NavigationStyled>
      <LinkStyled to="/" exact>
        <ListIconStyled></ListIconStyled>
      </LinkStyled>
      <LinkStyled to="/create">
        <CreateIconStyled></CreateIconStyled>
      </LinkStyled>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  grid-row: 1;
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin-top: 70px;
`

const LinkStyled = styled(NavLink)`
  color: #ffc187;
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &.active {
    color: #54abbc;
  }
`

const ListIconStyled = styled(ListOl)`
  display: inline-block;
  justify-content: flex-start;
  margin-left: 30px;
  height: 30px;
`
const CreateIconStyled = styled(FileAlt)`
  display: inline-block;
  justify-content: flex-end;
  margin-right: 30px;
  height: 30px;
`
