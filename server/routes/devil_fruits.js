// This file handles HTTP requests and controls routing across multipel files

import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { FruitsController } from '../controllers/devil_fruits.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// Loads Devil Fruits from query in config/controllers/devil_fruits.js, when root
// path requested from the URL.
router.get('/', FruitsController.getFruits) 

// Sends JSON information regarding a particular fruit!
router.get('/:fruitId', (req, res) => {
    const fruit = devil_fruits.find(fruit => fruit.id === req.params.fruitId)
    if(fruit) {
        res.status(200).json(fruit)
    }
    else {
        res.status(404).json({ error: "Fruit not found! "})
    }
})

export default router