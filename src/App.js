import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Header from './Header'
import Page from './Page'
import SearchBar from './SearchBar'
import TagFilter from './TagFilter'
import Note from './Note'
import notes from './notes.json'

export default function App({ onSelectTag }) {
  return (
    <React.Fragment>
      <Header></Header>
      <Page></Page>
    </React.Fragment>
  )
}
