import express from 'express'
import pkg from 'jsonwebtoken'
const { sign, verify } = pkg
import cors from 'cors'
import pkgBodyParser from 'body-parser'
const { json } = pkgBodyParser
import { readFileSync } from 'fs'

const app = express()

app.use(cors())
app.use(json())

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API.'
  })
})

app.get('/sucursales', verifyToken, (req, res) => {
  verify(req.token, 'the_secret_key', (err) => {
    if (err) {
      res.sendStatus(401)
    } else {
      var branchesDB = readFileSync('./db/branches.json')
      var branchesInfo = JSON.parse(branchesDB)
      res.json({
        sucursales: branchesInfo.data
      })
    }
  })
})

app.post('/login', (req, res) => {
  var userDB = readFileSync('./db/user.json')
  var userInfo = JSON.parse(userDB)
  if (
    req.body &&
    req.body.username === userInfo.username &&
    req.body.password === userInfo.password
  ) {
    // The secret key should be an environment variable in a live app
    const token = sign({ userInfo }, 'the_secret_key')
    res.json({
      token,
      username: userInfo.username
    })
  } else {
    res.sendStatus(401)
  }
})

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization']
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    req.token = bearerToken
    next()
  } else {
    res.sendStatus(401)
  }
}

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
