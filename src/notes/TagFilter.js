import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import FilterButton from './FilterButton'

TagFilter.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func
}

export default function TagFilter({ onClick, tags, selectedTag }) {
  return (
    <FilterWrapperStyled>
      <TagFilterStyled>
        {tags.map(tag => (
          <FilterButton
            selectedTag={selectedTag}
            onClick={() => onClick(tag)}
            tag={tag}
            key={tag}
          ></FilterButton>
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
