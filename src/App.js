import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Header from './Header'
import Page from './Page'
import SearchBar from './SearchBar'
import TagFilter from './TagFilter'
import Note from './Note'
import notes from './notes.json'

export default function App({ onSelectTag }) {
  const [selectedTag, setSelectedTag] = useState('')
  return (
    <React.Fragment>
      <Header></Header>
      <Page></Page>
    </React.Fragment>
  )
}

function onSelectTag(notes, selectedTag) {
  return notes.filter(note => note.tag.includes(selectedTag))
}

const ScrollerStyled = styled.div`
  display: grid;
  gap: 20px;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding: 20px 10px;
`
