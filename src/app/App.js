import React, { useState } from 'react'
import Header from '../common/Header'
import NotePage from '../notes/NotePage'
import notesData from '../notes.json'

export default function App() {
  const [notes, setNotes] = useState(notesData)
  const [selectedTag, setSelectedTag] = useState()

  const allNoteTags = Array.from(
    notesData.reduce((prev, note) => {
      prev.add(note.tag)
      return prev
    }, new Set())
  ) //Problem: Wenn die Karten mehrfach gefiltert werden, verschwinden Karten und damit auch ihre tags
  /*
  const FullListPage = filterListByTag('FullList')
  const StartedListPage = filterListByTag('StartedList', 'started')
  
  const AdvancedListPage = filterListByTag('AdvancedList', 'advanced')
  const CompletedListPage = filterListByTag('CompletedList', 'completed')
*/

  return (
    <>
      <Header></Header>
      <NotePage
        tags={allNoteTags}
        onSelectTag={selectTag}
        // title={FullListPage}
        notes={notes}
      ></NotePage>
    </>
  )

  function selectTag(clickedTag) {
    console.log('clicky')
    setSelectedTag(clickedTag)
    console.log(clickedTag)
    const filteredNotes = selectedTag
      ? notes.filter(note => note.tag.includes(selectedTag))
      : notes
    setNotes(filteredNotes)
  }
}
