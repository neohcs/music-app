import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Note from './Note'
import notes from './notes.json'
import TagFilter from './TagFilter'

export default function App({ onSelectTag }) {
  const [selectedTag, setSelectedTag] = useState('')
  return (
    <React.Fragment>
      <TagFilter tags={['one', 'two', 'three']} onClick={setSelectedTag} />
      <Scroller>
        {notes.map((note, index) => (
          <Note
            key={index}
            title={note.title}
            date={note.date}
            content={note.content}
            tag={note.tag}
          />
        ))}
      </Scroller>
    </React.Fragment>
  )
}

function onSelectTag(notes, selectedTag) {
  return notes.filter(note => note.tag.includes(selectedTag))
}

const Scroller = styled.div`
  display: grid;
  gap: 20px;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding: 20px 10px;
`
