'use strict'

const app = require('../app.js')

const signUpSuccess = (data) => {
  alert('success')
}

const signInSuccess = (data) => {
  app.user = data.user
  alert('success')
}

const signOutSuccess = () => {
  app.user = null
  alert('success')
}

const changePasswordSuccess = () => {
  alert('success')
}

const onSuccess = (data) => {
  alert('success')
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
