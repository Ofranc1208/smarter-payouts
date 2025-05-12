// /api/calculate.js

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { futureValue, discountRate } = req.body;

  if (typeof futureValue !== 'number' || typeof discountRate !== 'number') {
    return res.status(400).json({ error: 'Invalid input format' });
  }

  const presentValue = futureValue / (1 + discountRate);

  res.status(200).json({ presentValue });
}
