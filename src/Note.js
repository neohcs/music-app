import React from 'react'
import styled from 'styled-components'
import Tag from './Tag'

export default function Note({ title, content, tag }) {
  return (
    <NoteStyled>
      <h2>{title}</h2>
      <p>{content}</p>
      <Tag tag={tag}></Tag>
    </NoteStyled>
  )
}

const NoteStyled = styled.section`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
`
