'use strict'

const app = require('../app.js')

const signInSuccess = (data) => {
  app.user = data.user
  $('#checkout').show()
  $('#authenticate').hide()
}

const signOutSuccess = () => {
  app.user = null
  $('#checkout').hide()
  $('#authenticate').show()
}

const changePasswordSuccess = () => {
}

const signUpSuccess = (data) => {
  $('#checkout').show()
  $('#newuser').hide()
  $('#newuser2').show()
  $('#newusererror').show()
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
