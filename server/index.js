const express = require('express') // Common JS modules
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const app = express()

passport.use(new GoogleStrategy())

const PORT = process.env.PORT || 5001
app.listen(POST)
