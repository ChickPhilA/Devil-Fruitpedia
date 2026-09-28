import { pool } from './database.js'
import './dotenv.js'
import devil_fruits from '../data/devil_fruits.js'

const createFruitsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS fruits;

        CREATE TABLE IF NOT EXISTS fruits (
            id TEXT PRIMARY KEY,  
            name VARCHAR(255) NOT NULL,
            users TEXT[] NOT NULL,
            description TEXT NOT NULL,
            type VARCHAR(50) NOT NULL,
            picture TEXT
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🍎 Devil Fruits table created successfully!')
    }
    catch (err) {
        console.error('👿⚠️ ERROR CREATING DEVIL FRUITS TABLE', err)
    }
}

const seedFruitsTable = async () => {
    await createFruitsTable()

    // Loading the data from the JSON into the database
    for (const fruit of devil_fruits) {
        const insertQuery = {
            text: `
                INSERT INTO fruits (id, name, users, description, type, picture)
                VALUES ($1, $2, $3, $4, $5, $6)
            `,
        }

        const values = [fruit.id, fruit.name, fruit.users, fruit.description, fruit.type, fruit.picture]

        pool.query(insertQuery, values, (err, res) => {
            if(err) {
                console.error('⚠️ ERROR INSERTING FRUIT', err)
                return
            }

            console.log(`🎉 ${fruit.name} added successfully!`)
        })
    }
}

seedFruitsTable()