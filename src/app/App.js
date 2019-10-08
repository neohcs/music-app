import React, { useState } from 'react'
import notesData from '../notes.json'
import NotePage from '../notes/NotePage'
import CreatePage from '../create/CreatePage'

export default function App() {
  const [selectedTag, setSelectedTag] = useState('')
  const allNoteTags = Array.from(
    notesData.reduce((prev, note) => {
      prev.add(note.tag)
      return prev
    }, new Set())
  )
  const filteredNotes = notesData.filter(note => note.tag.includes(selectedTag))

  function selectTag(clickedTag) {
    setSelectedTag(clickedTag)
    return selectedTag === clickedTag
      ? setSelectedTag('')
      : setSelectedTag(clickedTag)
  }

  function createNote(newNoteData) {
    // JSON.stringify(newNoteData) -> bearbeiten, wenn Backend vorhanden
    notesData.push(newNoteData)
  }

  return (
    <>
      <NotePage
        tags={allNoteTags}
        onSelectTag={selectTag}
        notes={filteredNotes}
        selectedTag={selectedTag}
      ></NotePage>
      <CreatePage
        tags={allNoteTags}
        onSelectTag={selectTag}
        selectedTag={selectedTag}
        onSubmit={createNote}
      ></CreatePage>
    </>
  )
}
