"use client";
import React, { useState, useEffect } from "react";
import BuyForm from "../Investment-Dashboard/BuyForm";
import SellForm from "../Investment-Dashboard/SellForm";
import Popup from "../Popup";
import { Button } from "../ui/button";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StockChart = () => {
  const [stockSymbol, setStockSymbol] = useState("IBM"); // Default symbol
  const [currency, setCurrency] = useState("INR"); // Default currency
  const [stockData, setStockData] = useState([]); // Stock data points (prices)
  const [labels, setLabels] = useState([]); // X-axis labels (timestamps)
  const [loading, setLoading] = useState(true);
  const [conversionRate, setConversionRate] = useState(1); // Conversion rate (USD to INR)
  const [errorMessage, setErrorMessage] = useState(""); // Error message handling
  const [searchTerm, setSearchTerm] = useState(""); // Search term
  const [suggestions, setSuggestions] = useState([]); // Stock symbol suggestions
  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [isSellOpen, setIsSellOpen] = useState(false);

  const handleBuyOpen = () => setIsBuyOpen(true);
  const handleSellOpen = () => setIsSellOpen(true);
  const handleClose = () => {
    setIsBuyOpen(false);
    setIsSellOpen(false);
  };
  // Fetch stock data when the stock symbol or currency changes
  useEffect(() => {
    if (!stockSymbol) return;

    const fetchStockData = async () => {
      try {
        setLoading(true);
        setErrorMessage(""); // Clear any previous error

        // Fetch stock data from Alpha Vantage
        const stockResponse = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=5min&apikey=IW6TBX85KQJYB68P`
        );

        const timeSeries = stockResponse.data["Time Series (5min)"];

        // If no time series data is found, log the response for debugging
        if (!timeSeries) {
          console.error("Stock data response:", stockResponse.data);
          setErrorMessage("Stock data not found. Check symbol or API limit.");
          setLoading(false);
          return;
        }

        const stockPrices = [];
        const stockLabels = [];

        // Populate the stock data and labels for the chart
        for (let time in timeSeries) {
          stockLabels.push(time);
          stockPrices.push(parseFloat(timeSeries[time]["1. open"]));
        }

        setLabels(stockLabels.reverse()); // Reverse the order for correct display
        setStockData(stockPrices.reverse());

        // Fetch conversion rate (USD to the selected currency)
        const currencyResponse = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/USD`
        );
        setConversionRate(currencyResponse.data.rates[currency]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stock data:", error);
        setErrorMessage("Error fetching stock data. Please try again later.");
        setLoading(false);
      }
    };

    fetchStockData();
  }, [stockSymbol, currency]);

  // Fetch stock symbol suggestions
  const fetchSuggestions = async (query) => {
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
      );
      const suggestedStocks = response.data.bestMatches.map((stock) => ({
        symbol: stock["1. symbol"],
        name: stock["2. name"],
      }));
      setSuggestions(suggestedStocks);
    } catch (error) {
      console.error("Error fetching stock suggestions:", error);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      fetchSuggestions(value); // Fetch suggestions based on input
    } else {
      setSuggestions([]); // Clear suggestions if input is empty
    }
  };

  const handleSuggestionClick = (symbol) => {
    setStockSymbol(symbol); // Set the stock symbol when a suggestion is clicked
    setSearchTerm("");
    setSuggestions([]); // Clear suggestions after selection
  };

  // Chart.js configuration
  const chartData = {
    labels: labels, // X-axis labels
    datasets: [
      {
        label: `Stock Price (${currency})`,
        data: stockData.map((price) => (price * conversionRate).toFixed(2)), // Convert prices to selected currency
        fill: false,
        borderColor: "#4CAF50", // Line color (green)
        backgroundColor: "#4CAF50",
        tension: 0.1, // Smooth curve
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: `Price (${currency})`,
        },
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="p-6 bg-white/10 text-white rounded-lg shadow-md w-full h-auto">
       <div className="flex justify-between">
      <div>
        <h2 className="text-2xl font-bold ">Bitcoin(BTC)</h2>
        <div className="flex items-center py-4 gap-8">
          <h2 className="text-xl font-semibold ">$42715.35</h2>
          <p className="text-red-400 px-2 py-1 text-sm bg-red-400/10 rounded-full">
            -20.9%
          </p>
        </div>
      </div>
      <div className="flex gap-6">
        <Button className="bg-blue-600 text-white" onClick={handleBuyOpen}>Buy Now</Button>
        <Button className="bg-green-600 text-white" onClick={handleSellOpen}>Sell Now</Button>
      </div>

      {/* Buy Form Popup */}
      <Popup open={isBuyOpen} onClose={handleClose} title="Buy Stock">
        <BuyForm stockName="Bitcoin(BTC)" stockPrice="42715.35" availableBalance="1000000.00" onClose={handleClose} />
      </Popup>

      {/* Sell Form Popup */}
      <Popup open={isSellOpen} onClose={handleClose} title="Sell Stock">
        <SellForm stockName="Bitcoin(BTC)" stockPrice="42715.35" onClose={handleClose} />
      </Popup>
    </div>
      {/* Search Section */}
      <div className="mb-4 flex flex-col relative">
        <input
          type="text"
          placeholder="Search stock symbol (e.g., IBM)"
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2  bg-white/15 text-white rounded mb-2"
        />
        {suggestions.length > 0 && (
          <ul className="absolute top-12 bg-white/10 text-white w-full rounded shadow-md max-h-40 overflow-y-auto">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.symbol}
                className="p-2 cursor-pointer hover:bg-gray-700"
                onClick={() => handleSuggestionClick(suggestion.symbol)}
              >
                {suggestion.symbol} - {suggestion.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Currency Selection */}
      <div className="mb-4">
        <label htmlFor="currency" className="mr-2">
          Currency:{" "}
        </label>
        <select
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="bg-gray-800 p-2 rounded text-white"
        >
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>

      {/* Error Message */}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      {/* Stock Chart */}
      {loading ? (
        <p>Loading stock data...</p>
      ) : (
        <div className="h-96">
          <Line data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
};

export default StockChart;
