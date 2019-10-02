import React from 'react'
import styled from 'styled-components/macro'
import Note from './Note'
import TagFilter from './TagFilter'
import SearchBar from '../SearchBar'
import App from '../app/App'

export default function NotePage({ onSelectTag, notes, title, allNoteTags }) {
  return (
    <PageStyled title={title}>
      <SearchBar></SearchBar>
      <TagFilter tags={allNoteTags} onClick={onSelectTag} />
      <ScrollerStyled>
        {notes.map(note => (
          <Note
            key={note.index}
            title={note.title}
            date={note.date}
            content={note.content}
            tag={note.tag}
            onSelectTag={() => onSelectTag(note)}
          />
        ))}
      </ScrollerStyled>
    </PageStyled>
  )
}

const PageStyled = styled.div`
  display: grid;
  grid-template-rows: auto;
`

const ScrollerStyled = styled.div`
  display: grid;
  gap: 20px;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding: 20px 10px;
`
