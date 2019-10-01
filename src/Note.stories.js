import React from 'react'
import Note, { DateStyled, TitleStyled, ContentStyled, Tag } from './Note'

export default {
  title: 'Note'
}

export const note = () => (
  <Note
    date="1.1.2009"
    title="New SongNote"
    content="No nodes here"
    tag="hallo"
  >
    <DateStyled></DateStyled>
    <TitleStyled></TitleStyled>
    <ContentStyled></ContentStyled>
    <Tag></Tag>
  </Note>
)
