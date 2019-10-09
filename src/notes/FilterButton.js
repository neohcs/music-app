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
  padding: 2px;
  border: none;
  /* border: 0.5px solid #54abbc; */
  width: 100px;
  font-size: 14px;
  border-radius: 7px;
  background-color: #e4f2f0;
  color: #54abbc;
  background: ${props => (props.selected ? '#4db5bf' : '#ecf7f8')};
  color: ${props => (props.selected ? '#f5f8f8' : '#54abbc')};
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  box-shadow: 0 2px 5px #0002;
  :focus {
    box-shadow: 0 0 1px 3px rgba(70, 220, 252, 0.7);
  }
  :active {
    box-shadow: none;
    background: '#48c0cb';
    color: 'white';
    font-weight: 'bold';
  }
`
