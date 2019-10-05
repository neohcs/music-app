import React, { useState } from 'react'
import { Pageview } from 'styled-icons/material'
import { Collapse, EditAlt } from 'styled-icons/boxicons-regular'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Tag from './Tag'

Note.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string, //update this to dynamic date
  content: PropTypes.string
}

export default function Note({
  title,
  date,
  content,
  tag,
  handleClick,
  className,
  expanded
}) {
  const [isNoteExpanded, setIsNoteExpanded] = useState(false)

  function toggleExpanded() {
    setIsNoteExpanded(!isNoteExpanded)
  }

  return (
    <NoteStyled>
      <DateStyled>{date}</DateStyled>
      <TitleStyled>{title}</TitleStyled>
      {isNoteExpanded ? (
        <ContentStyled className={'expanded'}>{content}</ContentStyled>
      ) : (
        <ContentStyled>{content}</ContentStyled>
      )}
      <Tag tag={tag}></Tag>
      {isNoteExpanded ? (
        <>
          <NoteCollapseIconStyled
            onClick={toggleExpanded}
          ></NoteCollapseIconStyled>
          <NoteEditIconStyled></NoteEditIconStyled>
        </>
      ) : (
        <NoteViewIconStyled onClick={toggleExpanded}></NoteViewIconStyled>
      )}
    </NoteStyled>
  )
}

const NoteStyled = styled.section`
  width: 90vw;
  box-sizing: border-box;
  font-family: Lucida Grande, Lucida Sans Unicode, Lucida Sans, Geneva, Verdana,
    sans-serif;
  padding: 10px 20px 20px;
  box-shadow: 0 10px 10px #0002;
  background: #f4f4f4;
`

const DateStyled = styled.div`
  display: block;
  float: right;
  margin-right: -10px;
  font-size: 12px;
  color: #3997a0;
`
const TitleStyled = styled.h1`
  font-size: 18px;
  color: #3997a0;
`

const ContentStyled = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  height: 60px;
  overflow: hidden;
  font-size: 16px;
  color: #54abbc;
  word-wrap: break-word;

  &.expanded {
    display: block;
    height: auto;
  }
`

const NoteViewIconStyled = styled(Pageview)`
  display: inline-block;
  position: absolute;
  right: 30px;
  height: 40px;
  color: #f6c597;
`

const NoteCollapseIconStyled = styled(Collapse)`
  display: inline-block;
  position: absolute;
  right: 30px;
  height: 30px;
  color: #f6c597;
`

const NoteEditIconStyled = styled(EditAlt)`
  display: inline-block;
  position: absolute;
  right: 70px;
  height: 30px;
  color: #f6c597;
`
