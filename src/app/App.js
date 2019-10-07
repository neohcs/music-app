import React, { useState } from 'react'
import notesData from '../notes.json'
import NotePage from '../notes/NotePage'
import NoteViewPage from '../notes/NoteViewPage'

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
      <NotePage
        tags={allNoteTags}
        onSelectTag={selectTag}
        notes={filteredNotes}
        selectedTag={selectedTag}
      ></NotePage>
      <NoteViewPage
        onSelectTag={selectTag}
        notes={filteredNotes}
      ></NoteViewPage>
    </>
  )

  function selectTag(clickedTag) {
    setSelectedTag(clickedTag)
    return selectedTag === clickedTag
      ? setSelectedTag('')
      : setSelectedTag(clickedTag)
  }
}
