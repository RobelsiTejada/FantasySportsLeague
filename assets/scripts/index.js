'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')

// On document ready
$(() => {
  $('#passwordChange').click(function () {
    $('#newpassword').toggle()
  })
  $('#checkout').hide()
  $('#newpassword').hide()
  $('#newusererrorp').hide()
  $('#newuser2').hide()
  $('#loginerrorp').hide()
  $('#logedin').hide()
  $('#newpassword').hide()
  $('.changepass').hide()
  $('#authenticate').show()
  $('#newuser').show()
  $('#login').show()
  $('.carousel').carousel({
    interval: 1000
  })
  authEvents.addHandlers()
})
