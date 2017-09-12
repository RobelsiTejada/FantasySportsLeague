'use strict'

const app = require('../app.js')

const signInSuccess = (data) => {
  app.user = data.user
  $('#authenticate').hide()
  $('#checkout').show()
  $('#newpassword').hide()
  $('#login').hide()
  $('#logedin').show()
  $('.passwordChange').show()
}

const signOutSuccess = () => {
  app.user = null
  $('#newpassword').hide()
  $('#checkout').hide()
  $('#authenticate').show()
  $('.passwordChange').hide()
}

const changePasswordSuccess = () => {
  $('#newpassword').hide()
}

const signUpSuccess = (data) => {
  $('#newusererrorp').hide()
  $('#newuser').hide()
  $('#newuser2').show()
  $('#newpassword').hide()
  $('.passwordChange').hide()
}

const signUpFailure = (error) => {
  console.error(error)
  $('#newpassword').hide()
  $('.passwordChange').hide()
}

const signInFailure = (error) => {
  console.error(error)
  $('#loginerrorp').show()
  $('.passwordChange').hide()
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
