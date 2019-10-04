import React, { useState } from 'react'
import Header from '../common/Header'
import NotePage from '../notes/NotePage'
import notesData from '../notes.json'

export default function App() {
  const [selectedTag, setSelectedTag] = useState('')

  const allNoteTags = Array.from(
    notesData.reduce((prev, note) => {
      prev.add(note.tag)
      return prev
    }, new Set())
  )

  const filteredNotes = notesData.filter(note => note.tag.includes(selectedTag))

  return (
    <>
      <Header></Header>
      <NotePage
        tags={allNoteTags}
        onSelectTag={selectTag}
        notes={filteredNotes}
      ></NotePage>
    </>
  )

  function selectTag(clickedTag) {
    setSelectedTag(clickedTag)
    return selectedTag === clickedTag
      ? setSelectedTag('')
      : setSelectedTag(clickedTag)
  }
}
