import React, { useState } from 'react'
import Header from '../common/Header'
import Page from '../common/Page'

export default function App({ onSelectTag }) {
  const [selectedTag, setSelectedTag] = useState()

  return (
    <React.Fragment>
      <Header></Header>
      <Page
        pageTitle={pageTitle}
        notes={filteredNoteList}
        onSelectTag={setSelectedTag(selectedTag)}
      ></Page>
    </React.Fragment>
  )
}

function filterListByTag({ pageTitle, filterProp }) {
  const listFilteredByTag = notes.filter(note => props.tag.includes(filterProp))

  return (
    <Page
      pageTitle={pageTitle}
      notes={listFilteredByTag}
      onSelectTag={setSelectedTag(selectedTag)}
    ></Page>
  )
}

const FullList = filterListByTag('AllListPage')
const StartedList = filterListByTag('StartedListPage', 'started')
const AdvancedList = filterListByTag('AdvancedListPage', 'advanced')
const CompletedList = filterListByTag('CompletedListPage', 'completed')
