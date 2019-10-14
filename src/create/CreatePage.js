import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Page from '../common/Page'
import Header from '../common/Header'
import Navigation from '../common/Navigation'

CreatePage.propTypes = {
  onSubmit: PropTypes.func
}

export default function CreatePage({ onSubmit, date }) {
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
  overflow-y: auto;
  scroll-behavior: smooth;
  padding: 20px;
  justify-items: center;
`

const InputDateStyled = styled.input`
  height: 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding: 10px;
  width: 95px;
  color: lightgrey;
`

const InputTitleStyled = styled.input`
  height: 30px;
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  word-wrap: break-word;
  word-break: break-all;
  color: grey;
  box-shadow: 0 5px 10px #0002;
  :focus {
    box-shadow: 0 0 1px 3px rgba(70, 220, 252, 0.7);
  }
`

const InputContentStyled = styled.textarea`
  width: 100%;
  height: 250px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding: 10px;
  font-size: 16px;
  word-wrap: break-word;
  color: grey;
  box-shadow: 0 5px 10px #0002;
  :focus {
    box-shadow: 0 0 1px 3px rgba(70, 220, 252, 0.7);
  }
`

const InputRecordStyled = styled.input`
  height: 30px;
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  word-wrap: break-word;
  word-break: break-all;
  color: grey;
  box-shadow: 0 5px 10px #0002;
  :focus {
    box-shadow: 0 0 1px 3px rgba(70, 220, 252, 0.7);
  }
`

const SelectLabelStyled = styled.label`
  font-size: 14px;
  padding-left: 10px;
  color: grey;
  opacity: 0.7;
  height: 10px;
  justify-self: left;
`

const SelectTagStyled = styled.select`
  display: block;
  font-size: 16px;
  font-weight: bold;
  color: grey;
  opacity: 0.7;
  line-height: 1.3;
  padding: 10px;
  width: 100%;
  border: 1px solid lightgrey;
  box-shadow: 0 1px 0 0.5px rgba(0, 0, 0, 0.04);
  border-radius: 7px;
  appearance: none;
  :focus {
    box-shadow: 0 0 1px 3px rgba(70, 220, 252, 0.7);
  }
`

const ButtonStyled = styled.button`
  height: 30px;
  width: 120px;
  display: inline-block;
  padding: 2px 15px;
  background: #ecf7f8;
  font-size: 18px;
  font-weight: bold;
  color: #54abbc;
  border-radius: 7px;
  border: none;
  box-shadow: 0 2px 5px #0002;
  :focus {
    box-shadow: 0 0 1px 3px rgba(70, 220, 252, 0.7);
  }
`
