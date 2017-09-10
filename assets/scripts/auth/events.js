'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.fail)
}

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.fail)
}

const onSignOut = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.event.id
  api.signOut(id)
    .done(ui.signOutSuccess)
    .fail(ui.fail)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.event.id
  api.changePassword(id)
    .done(ui.changePasswordSuccess)
    .fail(ui.fail)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
