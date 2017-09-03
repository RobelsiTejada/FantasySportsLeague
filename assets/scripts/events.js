'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require(`./../../lib/get-form-fields.js`)

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.onError)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.onError)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .done(ui.signOutSuccess)
    .fail(ui.onError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.onError)
}

const addHandlers = () => {
  $('#signUp').on('submit', onSignUp)
  $('#signIn').on('submit', onSignIn)
  $('#signOut').on('submit', onSignOut)
  $('#changePassword').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
