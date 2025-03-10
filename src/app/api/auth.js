export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
   
      if (email === 'user@example.com' && password === 'password123') {
        
        return res.status(200).json({ token: 'fake-jwt-token' });
      } else {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
    } else {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  }