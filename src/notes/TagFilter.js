import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

TagFilter.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func
}

export default function TagFilter({ onClick, tags, active }) {
  return (
    <FilterWrapperStyled>
      <TagFilterStyled>
        {tags.map(tag => (
          <FilterButtonStyled onClick={() => onClick(tag)} key={tag}>
            {tag}
          </FilterButtonStyled>
        ))}
      </TagFilterStyled>
    </FilterWrapperStyled>
  )
}

const FilterWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: 10px;
`

const TagFilterStyled = styled.div`
  grid-column: 2;
  position: relative;
  width: 90vw;
  display: flex;
  justify-content: space-between;
`
const FilterButtonStyled = styled.button`
  border: none;
  padding: 2px 15px;
  background-color: #e4f2f0;
  font-size: 14px;
  color: #54abbc;
  border-radius: 7px;
  margin-right: 10px;

  &:active {
    background-color:#48c0cb;
    color: #f6ddab;
    font-weight: bold;
  }

  /* einbauen, damit Farbe sich bis zum nächsten Klick verändert?
  &:active {
    background-color: ${props => (props.active ? '#48c0cb' : '#e4f2f0')};
    color: ${props => (props.active ? '#f6ddab' : '##54abbc')};
  }*/
`
