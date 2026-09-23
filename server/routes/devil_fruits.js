// This file handles HTTP requests and controls routing across multipel files

import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import devil_fruits from '../data/devil_fruits.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// When a router is pointed to this file, it'll return the json of all
// the Devil Fruit data!
// Type localhost:3000/devil_fruits and see what you get!
router.get('/', (req, res) => {
    res.status(200).json(devil_fruits)
})

// This is to display individual information pertaining to each devil fruit.
router.get('/:fruitId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../../client/src/public/fruit.html'))
})

export default router