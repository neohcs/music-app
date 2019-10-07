import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

FilterButton.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func
}

export default function FilterButton({ onClick, tag, selectedTag }) {
  return (
    <FilterButtonStyled
      onClick={() => onClick(tag)}
      selected={selectedTag === tag ? true : false}
    >
      {tag}
    </FilterButtonStyled>
  )
}

const FilterButtonStyled = styled.button`
  border: none;
  padding: 2px 15px;
  font-size: 14px;
  border-radius: 7px;
  margin-right: 10px;
  background-color: #e4f2f0;
  color: #54abbc;
  background: ${props => (props.selected ? '#48c0cb' : '#e4f2f0')};
  color: ${props => (props.selected ? '#f6ddab' : '#54abbc')};
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};

  :active {
    background-color: #48c0cb;
    color: #f6ddab;
    font-weight: bold;
  }
`
