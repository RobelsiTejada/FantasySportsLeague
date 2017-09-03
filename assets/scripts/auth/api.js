'use strict'

const app = require('./app.js')

const signUp = function (data) {
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    dataType: 'jsonp',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    dataType: 'jsonp',
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    dataType: 'jsonp',
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    dataType: 'jsonp',
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
