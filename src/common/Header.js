import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  text: PropTypes.string
}

export default function Header() {
  return <HeaderStyled>AUDIOPEN</HeaderStyled>
}

const HeaderStyled = styled.header`
  display: block;
  text-align: center;
  position: absolute;
  padding: 10px;
  height: 60px;
  width: 100vw;
  background-color: #48C0CB;
  font-size: 36px;
  font-weight: bold;
  color: #F5F8F8;
  letter-spacing: 3px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; */ */
`
