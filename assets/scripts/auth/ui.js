'use strict'

const app = require('./app.js')

const signUpSuccess = (data) => {
  console.log(data)
  $('#signup').hide()
}

const signInSuccess = (data) => {
  app.user = data.user
  console.log(data)
  // $('#signup, #signin').hide()
}

const signOutSuccess = () => {
  app.user = null
  alert('success')
  // $('#signup').hide()
  // $('#signin').show()
}

const changePasswordSuccess = () => {
  alert('success')
}

const onSuccess = (data) => {
  console.log(data)
}

const onError = (error) => {
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  onSuccess,
  onError
}
