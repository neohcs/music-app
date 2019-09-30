import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Tag from './Tag'

Note.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string
}

export default function Note({ title, date, content, tag }) {
  return (
    <NoteStyled>
      <DateStyled>{date}</DateStyled>
      <TitleStyled>{title}</TitleStyled>
      <ContentStyled>{content}</ContentStyled>
      <Tag tag={tag}></Tag>
    </NoteStyled>
  )
}

const NoteStyled = styled.section`
  padding: 10px 20px 20px;
  box-shadow: 0 10px 10px #0002;
  background: #f4f4f4;
`

const DateStyled = styled.div`
  display: block;
  float: right;
  font-size: 12px;
  color: #3997a0;
`
const TitleStyled = styled.h1`
  font-size: 18px;
  color: #3997a0;
`

const ContentStyled = styled.p`
  height: 40px;
  overflow-y: scroll;
  font-size: 16px;
  color: #54abbc;
`
