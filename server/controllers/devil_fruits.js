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