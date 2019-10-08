import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Page from '../common/Page'
import Header from '../common/Header'
import FilterButton from '../notes/FilterButton'

export default function CreatePage({
  notesData,
  tags,
  onSelectTag,
  selectedTag,
  onSubmit
}) {
  return (
    <>
      <Page title={'CreatePage'}></Page>
      <Header></Header>
      <FormStyled onSubmit={handleSubmit}>
        <InputTitleStyled
          name="title"
          placeholder={'Insert title here...'}
        ></InputTitleStyled>
        <InputContentStyled
          name="content"
          placeholder={'Express your creative genius here...'}
        ></InputContentStyled>
        <TagLineStyled
          name="tag"
          tags={tags}
          onClick={onSelectTag}
          selectedTag={selectedTag}
        >
          {tags.map(tag => (
            <FilterButton
              onClick={onSelectTag}
              selected={selectedTag === tag ? true : false}
              tag={tag}
              key={tag}
            ></FilterButton>
          ))}
        </TagLineStyled>
        <ButtonStyled onSubmit={handleSubmit}>Save note</ButtonStyled>
      </FormStyled>
    </>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target // hier halte ich fest, wo das Event passiert: auf der form
    const formData = new FormData(form) // hier gebe ich der FormData diese form mit, damit aus ihren Daten Key-Value-Pairs erstellt werden
    const data = Object.fromEntries(formData) // hier werden mit der Object.fromEntries-Methode die Key-Value-Paare in ein Objekt umgewandelt
    onSubmit(data) // hier wird onSubmit aufgerufen und das neue Objekt übergeben. Die Funktion wird der CreatePage in der App mit dem Argument createPage (Funktion) besetzt. Dort wird dann createPage ausgeführt
    console.log(data)
    console.log(notesData)
    form.reset() //dies leert die Felder der Form automatisch
    form.title.focus() // dies setzt den Fokus automatisch wieder ins Titel-Input-Feld
  }
}

const FormStyled = styled.form`
  display: grid;
  gap: 20px;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding: 20px;
  margin-top: 70px;
  justify-items: center;
`

const InputTitleStyled = styled.input`
  height: 30px;
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding: 10px 5px;
  font-size: 18px;
  font-weight: bold;
  color: grey;
  box-shadow: 0 5px 10px #0002;
`

const InputContentStyled = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding: 10px 5px;
  font-size: 16px;
  color: grey;
  box-shadow: 0 5px 10px #0002;
`

const TagLineStyled = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0;
`

const ButtonStyled = styled.button`
  height: 30px;
  width: 120px;
  display: inline-block;
  padding: 2px 15px;
  background: #e4f2f0;
  font-size: 16px;
  font-weight: bold;
  color: #54abbc;
  border-radius: 7px;
  border: 0.5px solid #54abbc;
`
