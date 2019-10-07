import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

SearchBar.propTypes = {
  input: PropTypes.string
}

export default function SearchBar() {
  return <SearchBarStyled type="input" placeholder={'Search'}></SearchBarStyled>
}

const SearchBarStyled = styled.input`
  position: relative;
  left: 32%;
  margin-top: 68px;
  width: 100px;
  background-color: #f1f1f1;
  padding-left: 5px;
  color: grey;
  border-radius: 7px;
  border: none;
  height: 20px;
  margin-bottom: 10px;
`
