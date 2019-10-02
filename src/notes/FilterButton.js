import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

FilterButton.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func
}

export default function FilterButton({ onClick, tag }) {
  return (
    <FilterButtonStyled onClick={() => onClick(tag)}>{tag}</FilterButtonStyled>
  )
}

const FilterButtonStyled = styled.button`
  border: none;
  padding: 2px 15px;
  font-size: 14px;
  border-radius: 7px;
  margin-right: 10px;
  color: #54abbc;
  background-color: #e4f2f0;

  :active {
    background-color: #48c0cb;
    color: #f6ddab;
    font-weight: bold;
  }
`
