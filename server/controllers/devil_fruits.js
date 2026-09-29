import { pool } from '../config/database.js'

export const getFruits = async (req, res) => {
    const results = `
        SELECT * FROM fruits;
    `

    try {
        const query = await pool.query(results)
        res.status(200).json(query.rows)
    }
    catch (err) {
        res.status(409).json( {error: err.message} )
    }
}

// A controller function to upload individual fruit information on a detailed Devil Fruit page.
export const getFruitById = async (req, res) => {
    const query = {
        text: `SELECT * FROM fruits WHERE id = $1`,
        values: [req.params.fruitId]
    }

    try {
        const result = await pool.query(query)
        // result.rows is an ARRAY, even when searching by a unique id.
        // How do you get just the single matching row out of it?

        const fruit = result.rows[0]

        if (fruit) {
            res.status(200).json(fruit)
        }
        else {
            res.status(404).json({ error: "Fruit not found!" })
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}
