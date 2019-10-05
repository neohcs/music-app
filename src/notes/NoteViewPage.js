import React from 'react'
import styled from 'styled-components/macro'
import Page from '../common/Page'
import Header from '../common/Header'
import Note from './Note'

export default function NotePage({
  notes,
  tags,
  className,
  expanded,
  children
}) {
  return (
    <Page title={'NoteViewPage'}>
      <Header></Header>
      <ScrollerStyled>
        {notes
          .map((note, index) => ({ ...note, index }))
          .filter(note => note.index === 0)
          .map(note => (
            <Note
              key={note.title}
              title={note.title}
              date={note.date}
              content={note.content}
              tag={note.tag}
            >
              {/* <DateStyled>{note.date}</DateStyled>
              <TitleStyled>{note.title}</TitleStyled>
              <ContentStyled className={'expanded'}>
                {note.content}
              </ContentStyled>
              <Tag tag={note.tag}></Tag> */}
            </Note>
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
