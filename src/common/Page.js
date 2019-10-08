import React from 'react'
import styled from 'styled-components/macro'

export default function Page({ children }) {
  return <PageStyled>{children}</PageStyled>
}

const PageStyled = styled.main`
  align-content: flex-start;
  display: grid;
  grid-template-rows: auto;
  overflow: auto;
`
