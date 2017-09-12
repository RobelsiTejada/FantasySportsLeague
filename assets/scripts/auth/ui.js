'use strict'

const app = require('../app.js')

const signInSuccess = (data) => {
  app.user = data.user
  $('#authenticate').hide()
  $('#checkout').show()
  $('#newpassword').show()
  $('.modal').hide()
}

const signOutSuccess = () => {
  app.user = null
  $('#newpassword').hide()
  $('#checkout').hide()
  $('#authenticate').show()
}

const changePasswordSuccess = () => {
}

const signUpSuccess = (data) => {
  $('#checkout').show()
  $('#newuser').hide()
  $('#newuser2').show()
}

const signUpFailure = (error) => {
  console.error(error)
  $('#newusererrorp').show()
}

const signInFailure = (error) => {
  console.error(error)
  $('#loginerrorp').show()
}

const success = (data) => {
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  failure,
  success,
  signUpFailure,
  signInFailure,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signUpSuccess
}
