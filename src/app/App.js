import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Page from '../common/Page'
import notesData from '../notes.json'

export default function App() {
  const [notes, setNotes] = useState(notesData)
  const [selectedTag, setSelectedTag] = useState()

  const allNoteTags = Array.from(
    notes.reduce((prev, note) => {
      note.tag && prev.add(note.tag)
      return prev
    }, new Set())
  )

  //  const FullList = filterListByTag('AllListPage')
  // const StartedList = filterListByTag('StartedListPage', 'started')
  //const AdvancedList = filterListByTag('AdvancedListPage', 'advanced')
  //const CompletedList = filterListByTag('CompletedListPage', 'completed')

  function selectTag(clickedTag) {
    setSelectedTag(clickedTag)
  }

  return (
    <>
      <Header></Header>
      <Page
        noteTags={allNoteTags}
        title={'title'}
        notes={notes}
        onSelectTag={setSelectedTag}
      ></Page>
    </>
  )

  /* function filterListByTag(title, filterProp) {
    const listFilteredByTag = notes.filter(note =>
      note.tag.includes(filterProp)
    )

    return (
      <Page
        title={title}
        notes={listFilteredByTag}
        onSelectTag={setSelectedTag(filterProp)}
      ></Page>
    )
  }
  */
}
