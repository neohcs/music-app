import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Tag.propTypes = {
  text: PropTypes.string
}

export default function Tag({ tag }) {
  return <TagStyled>{tag}</TagStyled>
}

const TagStyled = styled.div`
  display: inline-block;
  padding: 2px 15px;
  background: #e4f2f0;
  font-size: 14px;
  color: #54abbc;
  border-radius: 7px;
  margin-right: 10px;
`
