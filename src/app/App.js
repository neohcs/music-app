import React, { useState } from 'react'
import Header from '../common/Header'
import Page from '../common/Page'

export default function App({ onSelectTag }) {
  return (
    <React.Fragment>
      <Header></Header>
      <Page></Page>
    </React.Fragment>
  )
}
