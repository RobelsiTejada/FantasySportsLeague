'use strict'

const app = require('../app.js')

const signUpSuccess = (data) => {
  console.log(data)
  alert('success')
}

const signInSuccess = (data) => {
  app.user = data.user
  console.log(data)
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
