import React from 'react'
import styled from 'styled-components/macro'
import Header from './Header'

export default function Page({ title, children }) {
  return (
    <PageStyled>
      <Header>{title}</Header>
      {children}
    </PageStyled>
  )
}

const PageStyled = styled.main`
  display: grid;
  grid-template-rows: 48px auto;
  align-content: flex-start;
  overflow: auto;
`

/*

import React from 'react'
import styled from 'styled-components/macro'
import SearchBar from '../SearchBar'
import TagFilter from '../notes/TagFilter'
import Note from '../notes/Note'
//import notes from '../notes.json'

export default function Page({ onSelectTag, notes, noteTags }) {
  return (
    <PageStyled>
      <SearchBar></SearchBar>
      <TagFilter tags={noteTags} onClick={onSelectTag} />
      <ScrollerStyled>
        {notes.map((note, index) => (
          <Note
            key={index}
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

function onSelectTag(notes, selectedTag) {
  return notes.filter(note => note.tag.includes(selectedTag))
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
*/
