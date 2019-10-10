import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Note from './Note'
import TagFilter from './TagFilter'
import SearchBar from '../SearchBar'
import Page from '../common/Page'
import Header from '../common/Header'
import Navigation from '../common/Navigation'

NotePage.propTypes = {
  onSelectTag: PropTypes.func,
  notes: PropTypes.array,
  tags: PropTypes.string,
  selectedTag: PropTypes.string
}

export default function NotePage({ onSelectTag, notes, tags, selectedTag }) {
  return (
    <Page title={'NotePage'}>
      <Header></Header>
      <Navigation></Navigation>
      <ScrollerStyled>
        <SearchBar></SearchBar>
        <TagFilter
          tags={tags}
          onClick={onSelectTag}
          selectedTag={selectedTag}
        />
        {notes.map(note => (
          <Note
            key={note._id}
            title={note.title}
            date={note.date}
            content={note.content
              .split('\n')
              .map(line =>
                line === '' ? <br /> : <LineBreakStyled>{line}</LineBreakStyled>
              )}
            tag={note.tag}
          />
        ))}
      </ScrollerStyled>
    </Page>
  )
}

const ScrollerStyled = styled.div`
  display: grid;
  max-width: 100%;
  gap: 20px;
  overflow-y: auto;
  scroll-behavior: smooth;
  overflow-x: hidden;
  padding: 5px 20px;
  justify-items: center;
`
const LineBreakStyled = styled.p`
  margin: 0px;
`
