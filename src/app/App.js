import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
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
  )
/*
  const FullListPage = filterListByTag('FullList')
  const StartedListPage = filterListByTag('StartedList', 'started')
  const AdvancedListPage = filterListByTag('AdvancedList', 'advanced')
  const CompletedListPage = filterListByTag('CompletedList', 'completed')*/
  //Problem: Wenn die Karten mehrfach gefiltert werden, verschwinden Karten und damit auch ihre tags

  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/" render={FullListPage}></Route>
          <Route exact path="/started" render={StartedListPage}></Route>
          <Route exact path="/advanced" render={AdvancedListPage}></Route>
          <Route exact path="/completed" render={CompletedListPage}></Route>
        </Switch>
      </App>
    </Router>
  )

  function selectTag(title, clickedTag) {
    console.log('clicky')
    setSelectedTag(clickedTag)
    console.log(clickedTag)
    const filteredNotes = selectedTag
      ? notes.filter(note => note.tag.includes(selectedTag))
      : notes
    setNotes(filteredNotes)

    return (
      <NotePage
        tags={allNoteTags}
        onSelectTag={selectTag}
        title={FullListPage}
        notes={filteredNotes}
      ></NotePage>
    )
  }
}
