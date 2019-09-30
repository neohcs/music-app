import React from 'react'
import styled from 'styled-components'
import Tag from './Tag'

export default function Note({ index = 0 }) {
  const noteList = [
    {
      title: 'Lorem Ipsum',
      content:
        'There is something already written in this note. Click on the arrows to see the more info on the note and get the option to edit it.',
      tag: ['javascript', 'basics']
    },
    {
      title: 'Dolor Sit Amet',
      content:
        'There is something already written in this note. Click on the arrows to see the more info on the note and get the option to edit it.',
      tag: ['javascript', 'basics']
    },
    {
      title: 'Sed Diam Voluptua',
      content:
        'There is something already written in this note. Click on the arrows to see the more info on the note and get the option to edit it.',
      tag: ['javascript', 'basics']
    }
  ]

  return (
    <NoteStyled>
      <h2>{noteList[index].title}</h2>
      <p>{noteList[index].content}</p>
      <Tag tag={noteList[index].tag}></Tag>
    </NoteStyled>
  )
}

const NoteStyled = styled.section`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
`
