'use strict'

const app = require('./app.js')

const signUpSuccess = (data) => {
  console.log(data)
  alert('success')
  // $('#signup').hide()
}

const signInSuccess = (data) => {
  app.user = data.user
  console.log(data)
  alert('success')
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
  alert('success')
}

const onError = (error) => {
  console.log(error)
  alert('error')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  onSuccess,
  onError
}
