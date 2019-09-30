import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Tag.propTypes = {
  text: PropTypes.string
}

export default function Tag({ tag }) {
  return <TagStyled>{tag}</TagStyled>
}

const TagStyled = styled.div`
  display: inline-block;
  padding: 2px 20px;
  background: #e4f2f0;
  color: #54abbc;
  border-radius: 7px;
  margin-right: 10px;

  &:active {
    background: #48c0cb;
    color: #f6ddab;
  }

  &--selected {
    background: #48c0cb;
    color: #f6ddab;
  }
`
