import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Tag from './Tag'
import SearchBar from './SearchBar'
import TagFilter from './TagFilter'
import Note from './Note'
import notes from './notes.json'

export default function Page() {
  return (
    <PageStyled>
      <SearchBar></SearchBar>
      <TagFilter tags={['started', 'advanced', 'completed']} />
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
