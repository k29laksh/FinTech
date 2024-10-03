import axios from 'axios';
import { NextResponse } from 'next/server';

const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = process.env.NEWS_API_KEY;

export async function GET() {
  try {
    const response = await axios.get(NEWS_API_URL, {
      params: {
        country: 'in', 
        apiKey: API_KEY,
      },
    });

    return NextResponse.json(response.data.articles);
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching news', error }, { status: 500 });
  }
}
