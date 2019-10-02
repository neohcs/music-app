import React, { useState } from 'react'
import Header from '../common/Header'
import NotePage from '../notes/NotePage'
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
        title={'FullList'}
        notes={notes}
      ></NotePage>
    </>
  )

  function selectTag(clickedTag) {
    console.log('clicky')
    setSelectedTag(clickedTag)
  }

  function filterListByTag(title, filterProp) {
    return () => {
      const filteredNotes = filterProp
        ? notes.filter(note => note.tag.includes(filterProp))
        : notes
      const notesFilteredByTag = selectedTag
        ? filteredNotes.filter(
            note => note.tags && note.tags.includes(selectedTag)
          )
        : filteredNotes

      return (
        <NotePage
          tag={allNoteTags}
          onSelectTag={selectTag}
          title={title}
          notes={notesFilteredByTag}
        ></NotePage>
      )
    }
  }
}

//           onSelectTag={setSelectedTag(filterProp)} wieder einsetzen?

/* 
function withCardPage(title, filterProp) {
    return () => {
      const filteredCards = filterProp ? cards.filter(card => card[filterProp]) : cards
      const filteredByTag =
        selectedTag === 'all'
          ? filteredCards
          : filteredCards.filter(card => card.tags && card.tags.includes(selectedTag))
      return (
        <CardPage
          title={title}
          cards={filteredByTag}
          tags={allTags}
          onBookmarkClick={handleBookmarkClick}
          onSelectTag={setSelectedTag}
        />
      )
    }
  }



*/
