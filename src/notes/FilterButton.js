import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

FilterButton.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func
}

export default function FilterButton({ onClick, tag }) {
  const [buttonColor, setButtonColor] = useState(false)

  return (
    <FilterButtonStyled
      //onClick={() => onClick(tag)}
      onClick={handleClick}
      active={buttonColor}
    >
      {tag}
    </FilterButtonStyled>
  )
  function handleClick() {
    setButtonColor(!buttonColor)
    onClick(tag)
  }
}

const FilterButtonStyled = styled.button`
  border: none;
  padding: 2px 15px;
  font-size: 14px;
  border-radius: 7px;
  margin-right: 10px;
  background-color: #e4f2f0;
  color: #54abbc;
  background: ${props => (props.active ? '#48c0cb' : '#e4f2f0')};
  color: ${props => (props.active ? '#f6ddab' : '#54abbc')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};

  :active {
    background-color: #48c0cb;
    color: #f6ddab;
    font-weight: bold;
  }
`
