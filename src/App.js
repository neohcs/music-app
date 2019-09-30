import React from 'react'
import styled from 'styled-components'

import Note from './Note'
import notes from './notes.json'

export default function App() {
  return (
    <React.Fragment>
      <Scroller>
        {notes.map(note => (
          <Note />
        ))}
      </Scroller>
    </React.Fragment>
  )
}

const Scroller = styled.div`
  display: grid;
  gap: 20px;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding: 20px 10px;
`
