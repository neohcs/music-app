import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  text: PropTypes.string
}

export default function Header() {
  return <HeaderStyled>SongPen</HeaderStyled>
}

const HeaderStyled = styled.header`
  background-color: #4db5bf;
  color: #f5f8f8;
  display: block;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 36px;
  font-weight: bold;
  height: 60px;
  letter-spacing: 3px;
  padding: 10px;
  position: absolute;
  text-align: center;
  width: 100vw;
`
