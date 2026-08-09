const express = require('express')
const app = express()

app.use(express.json())

// API Route for Config
app.get('/api/config', (req, res) => {
    try {
        const supabaseUrl = process.env.SUPABASE_URL
        const supabaseKey = process.env.SUPABASE_ANON_KEY

        if (!supabaseUrl || !supabaseKey) {
            return res.status(500).json({ 
                error: 'Missing SUPABASE_URL or SUPABASE_ANON_KEY in Vercel Environment Variables.' 
            })
        }

        return res.status(200).json({
            supabaseUrl: supabaseUrl,
            supabaseKey: supabaseKey
        })
    } catch (err) {
        return res.status(500).json({ error: err.message || 'Server error' })
    }
})

// Export the Express app for Vercel Serverless
module.exports = app
