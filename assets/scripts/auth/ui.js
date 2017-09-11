'use strict'

const app = require('../app.js')

const signInSuccess = (data) => {
  app.user = data.user
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
}

const signOutSuccess = () => {
  app.user = null
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
}

const changePasswordSuccess = () => {
}

const signUpSuccess = (data) => {
  $('#sign-out').show()
  $('#sign-up').hide()
}

const success = (data) => {
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signUpSuccess
}
