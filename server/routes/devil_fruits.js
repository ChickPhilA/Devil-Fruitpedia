// This file handles HTTP requests and controls routing across multipel files

import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { getFruits } from '../controllers/devil_fruits.js'
import { getFruitById } from '../controllers/devil_fruits.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// Loads Devil Fruits from query in config/controllers/devil_fruits.js, when root
// path requested from the URL.
router.get('/', getFruits) 

// Sends JSON information regarding a particular fruit!
router.get('/:fruitId', getFruitById)

export default router