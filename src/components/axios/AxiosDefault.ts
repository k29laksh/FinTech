import axios from 'axios';

export default async function handler(req, res) {
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
  const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=financial_markets&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`;
  console.log(url)

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
    console.log(response)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching stock market news' });
  }
}