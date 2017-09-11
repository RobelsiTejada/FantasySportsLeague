'use strict'

const app = require('../app.js')

const signInSuccess = (data) => {
  app.user = data.user
}

const signOutSuccess = () => {
  app.user = null
}

const changePasswordSuccess = () => {
}

const signUpSuccess = (data) => {
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
