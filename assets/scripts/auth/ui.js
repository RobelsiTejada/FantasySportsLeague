'use strict'

const app = require('../app.js')

const signInSuccess = (data) => {
  app.user = data.user
  console.log('sign in success!')
}

const signOutSuccess = () => {
  app.user = null
  console.log('signed out')
}

const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
}

const signUpSuccess = (data) => {
  console.log(data)
}

const success = (data) => {
  console.log(data)
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
