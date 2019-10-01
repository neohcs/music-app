import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

TagFilter.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func
}

export default function TagFilter({ onClick, tags }) {
  return (
    <TagFilterStyled>
      {tags.map(tag => (
        <button onClick={() => onClick(tag)} key={tag}>
          {tag}
        </button>
      ))}
    </TagFilterStyled>
  )
}

const TagFilterStyled = styled.div`
  background-color: teal;
  height: 40px;
  width: 100vh;
`
