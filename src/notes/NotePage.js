import React from 'react'
import styled from 'styled-components/macro'
import Note from './Note'
import TagFilter from './TagFilter'
import SearchBar from '../SearchBar'
import Page from '../common/Page'
import Header from '../common/Header'

export default function NotePage({ onSelectTag, notes, title, tags }) {
  return (
    <Page title={title}>
      <Header></Header>
      <SearchBar></SearchBar>
      <TagFilter tags={tags} onClick={onSelectTag} />
      <ScrollerStyled>
        {notes.map(note => (
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
