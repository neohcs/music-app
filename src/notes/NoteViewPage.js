import React from 'react'
import styled from 'styled-components/macro'
import Note from '../notes/Note'
import TagFilter from '../notes/TagFilter'
import SearchBar from '../SearchBar'
import Page from '../common/Page'
import Header from '../common/Header'

export default function NotePage({ notes, tags }) {
  return (
    <Page title={'NoteViewPage'}>
      <Header></Header>
      <ScrollerStyled>
        {notes
          .map((note, index) => ({ ...note, index }))
          .filter(note => note.index === 0)
          .map(note => (
            <Note
              key={note.title}
              title={note.title}
              date={note.date}
              content={note.content}
              tag={note.tag}
            />
          ))}
      </ScrollerStyled>
    </Page>
  )
}

const ScrollerStyled = styled.div`
  display: grid;
  gap: 20px;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding: 20px 10px;
`
