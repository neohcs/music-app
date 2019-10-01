import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import SearchBar from './SearchBar'
import TagFilter from './TagFilter'
import Note from './Note'
import notes from './notes.json'

export default function Page() {
  /*const [selectedTag, setSelectedTag] = useState()*/

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
