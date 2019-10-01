import React from 'react'
import Note, { DateStyled, TitleStyled, ContentStyled, Tag } from './Note'

export default {
  title: 'Page'
}

export const page = () => (
  <Page>
    <SearchBar></SearchBar>
    <TagFilter
      tags={['started', 'advanced', 'completed']}
      onClick={setSelectedTag}
    />
    <ScrollerStyled>
      {notes.map((note, index) => (
        <Note
          key={index}
          title={note.title}
          date={note.date}
          content={note.content}
          tag={note.tag}
        />
      ))}
    </ScrollerStyled>
  </Page>
)
