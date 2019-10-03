import React, { useState } from 'react'
import Header from '../common/Header'
import NotePage from '../notes/NotePage'
import TagFilter from '../notes/TagFilter'
import FilterButton from '../notes/FilterButton'
import notesData from '../notes.json'

export default function App() {
  const [notes, setNotes] = useState(notesData)
  const [selectedTag, setSelectedTag] = useState()
  const [coloredButton, setColoredButton] = useState('button')

  const allNoteTags = Array.from(
    notesData.reduce((prev, note) => {
      prev.add(note.tag)
      return prev
    }, new Set())
  )

  /*
  const FullListPage = filterListByTag('FullList')
  const StartedListPage = filterListByTag('StartedList', 'started')
  const AdvancedListPage = filterListByTag('AdvancedList', 'advanced')
  const CompletedListPage = filterListByTag('CompletedList', 'completed')*/

  return (
    <>
      <Header></Header>
      <NotePage
        tags={allNoteTags}
        onSelectTag={selectTag}
        // title={FullListPage}
        notes={notes}
        className={'notSelected'}
      ></NotePage>
    </>
  )

  // Muss immer zweimal geklickt werden, bis es reagiert. Warum?
  // Wenn ich hier unter der Funktion eine andere Seite returnen will, klappt das immer nicht. Wie kann ich anders dem geklickten Filterbutton das props.selected mitgeben?
  function selectTag(clickedTag) {
    setNotes(notesData)
    console.log('clicky')
    setSelectedTag(clickedTag)
    console.log(clickedTag)
    const filteredNotes = selectedTag
      ? notesData.filter(note => note.tag.includes(selectedTag))
      : notesData
    setNotes(filteredNotes)

    /*     return (
      <TagFilter>
        <FilterButton
          tag={
            tag === clickedTag
              ? (className = 'selected')
              : (className = 'notSelected')
          }
        ></FilterButton>
      </TagFilter>
    )*/
  }
}

/*
    return (
      <NotePage
        tags={allNoteTags}
        onSelectTag={selectTag}
        title={FullListPage}
        notes={filteredNotes}
      ></NotePage>
    ) */
