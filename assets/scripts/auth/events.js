'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require(`../../../lib/get-form-fields.js`)

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.onError)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.onError)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.event.id
  api.signOut(id)
    .then(ui.signOutSuccess)
    .catch(ui.onError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onChangePassword
}
