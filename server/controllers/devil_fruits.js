import { pool } from '../config/database.js'

export const getFruits = async (req, res) => {
    try {
        const results = `
            SELECT * FROM fruits;
        `

        res.status(200).json(results.rows)
    }
    catch (err) {
        res.status(409).json( {error: error.message} )
    }
}