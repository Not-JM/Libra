export default function handler(req, res) {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
        return res.status(500).json({ 
            error: 'Missing SUPABASE_URL or SUPABASE_ANON_KEY in Vercel Environment Variables.' 
        });
    }

    return res.status(200).json({
        supabaseUrl: supabaseUrl,
        supabaseKey: supabaseKey
    });
}