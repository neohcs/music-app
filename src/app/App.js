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
        onSubmit={createCard}
      ></CreatePage>
    </>
  )

  function selectTag(clickedTag) {
    setSelectedTag(clickedTag)
    return selectedTag === clickedTag
      ? setSelectedTag('')
      : setSelectedTag(clickedTag)
  }

  function createCard(newNoteData) {
    notesData.push(newNoteData)
  }
}
