import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Page from '../common/Page'
import Header from '../common/Header'
import Navigation from '../app/Navigation'

CreatePage.propTypes = {
  onSubmit: PropTypes.func
}

export default function CreatePage({ onSubmit }) {
  const currentDay = new Date().getDate()
  const currentMonth = new Date().getMonth() + 1
  const currentYear = new Date().getFullYear()
  const currentDate = currentDay + '/' + currentMonth + '/' + currentYear

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target // hier halte ich fest, wo das Event passiert: auf der form
    const formData = new FormData(form) // hier gebe ich der FormData diese form mit, damit aus ihren Daten Key-Value-Pairs erstellt werden
    const data = Object.fromEntries(formData) // hier werden mit der Object.fromEntries-Methode die Key-Value-Paare in ein Objekt umgewandelt
    onSubmit(data) // hier wird onSubmit aufgerufen und das neue Objekt übergeben. Die Funktion wird der CreatePage in der App mit dem Argument createPage (Funktion) besetzt. Dort wird dann createPage ausgeführt
    form.reset() //dies leert die Felder der Form automatisch
    form.title.focus() // dies setzt den Fokus automatisch wieder ins Titel-Input-Feld
  }

  return (
    <Page title={'CreatePage'}>
      <Header></Header>
      <Navigation></Navigation>
      <FormStyled onSubmit={handleSubmit}>
        <InputDateStyled name="date" value={currentDate}></InputDateStyled>
        <InputTitleStyled
          name="title"
          type="text"
          placeholder={'Insert title here...'}
          maxLength="20"
          required
        ></InputTitleStyled>
        <InputContentStyled
          name="content"
          type="text"
          placeholder={'Express your creative genius here...'}
        ></InputContentStyled>
        <InputRecordStyled
          name="recording"
          type="text"
          placeholder={'Insert URL to your song here...'}
        ></InputRecordStyled>
        <SelectLabelStyled>
          Please select a tag for your note...
        </SelectLabelStyled>
        <SelectTagStyled name="tag">
          <option name="tag" value="started">
            started
          </option>
          <option name="tag" value="advanced">
            advanced
          </option>
          <option name="tag" value="completed">
            completed
          </option>
        </SelectTagStyled>
        <ButtonStyled>Save note</ButtonStyled>
      </FormStyled>
    </Page>
  )
}

const FormStyled = styled.form`
  display: grid;
  gap: 20px;
  justify-items: center;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding: 20px;
`

const InputDateStyled = styled.input`
  border: 1px solid lightgrey;
  border-radius: 3px;
  width: 95px;
  height: 20px;
  padding: 10px;
  color: lightgrey;
`

const InputTitleStyled = styled.input`
  box-shadow: 0 5px 10px #0002;
  border: 1px solid lightgrey;
  border-radius: 3px;
  width: 100%;
  height: 30px;
  padding: 10px;
  word-break: break-all;
  word-wrap: break-word;
  font-size: 18px;
  font-weight: bold;
  color: grey;
  :focus {
    box-shadow: 0 0 1px 3px rgba(70, 220, 252, 0.7);
  }
`

const InputContentStyled = styled.textarea`
  box-shadow: 0 5px 10px #0002;
  border: 1px solid lightgrey;
  border-radius: 3px;
  width: 100%;
  height: 250px;
  padding: 10px;
  word-wrap: break-word;
  font-size: 16px;
  color: grey;
  :focus {
    box-shadow: 0 0 1px 3px rgba(70, 220, 252, 0.7);
  }
`

const InputRecordStyled = styled.input`
  box-shadow: 0 5px 10px #0002;
  border: 1px solid lightgrey;
  border-radius: 3px;
  width: 100%;
  height: 30px;
  padding: 10px;
  word-break: break-all;
  word-wrap: break-word;
  font-size: 18px;
  font-weight: bold;
  color: grey;
  :focus {
    box-shadow: 0 0 1px 3px rgba(70, 220, 252, 0.7);
  }
`

const SelectLabelStyled = styled.label`
  justify-self: left;
  opacity: 0.7;
  height: 10px;
  padding-left: 10px;
  font-size: 14px;
  color: grey;
`

const SelectTagStyled = styled.select`
  display: block;
  opacity: 0.7;
  appearance: none;
  box-shadow: 0 1px 0 0.5px rgba(0, 0, 0, 0.04);
  border: 1px solid lightgrey;
  border-radius: 7px;
  width: 100%;
  line-height: 0.8;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: grey;
  :focus {
    box-shadow: 0 0 1px 3px rgba(70, 220, 252, 0.7);
  }
`

const ButtonStyled = styled.button`
  display: inline-block;
  box-shadow: 0 2px 5px #0002;
  border: none;
  border-radius: 7px;
  width: 120px;
  height: 30px;
  padding: 2px 15px;
  background: #ecf7f8;
  font-size: 18px;
  font-weight: bold;
  color: #54abbc;
  :focus {
    box-shadow: 0 0 1px 3px rgba(70, 220, 252, 0.7);
  }
`
