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
  width: 100%;
  width: 100px;
  background-color: #f1f1f1;
  padding-left: 5px;
  color: grey;
  border-radius: 7px;
  border: none;
  height: 20px;
`
