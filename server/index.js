// server/index.js
require('dotenv').config() // Automatically reads .env from project root
const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))

// Route to expose non-sensitive public keys to the client script
app.get('/api/config', (req, res) => {
    res.json({
        supabaseUrl: process.env.SUPABASE_URL,
        supabaseKey: process.env.SUPABASE_ANON_KEY
    })
})

const PORT = process.env.PORT || 3000
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
}

module.exports = app