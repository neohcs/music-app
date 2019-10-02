import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  text: PropTypes.string
}

export default function Header() {
  return <HeaderStyled>SongNotes</HeaderStyled>
}

const HeaderStyled = styled.div`
  display: block;
  text-align: center;
  position: absolute;
  padding: 10px;
  height: 60px;
  width: 100vw;
  background-color: #48c0cb;
  font-size: 36px;
  font-weight: bold;
  color: #f6c597;
`
