"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoIosSwap } from "react-icons/io";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1); // Amount in input currency
  const [convertedAmount, setConvertedAmount] = useState(0); // Converted amount
  const [inputCurrency, setInputCurrency] = useState("USD"); // Default input currency
  const [outputCurrency, setOutputCurrency] = useState("INR"); // Default output currency
  const [currencies, setCurrencies] = useState([]); // List of available currencies
  const [exchangeRate, setExchangeRate] = useState(1); // Exchange rate between input and output currencies

  // Fetch exchange rates and available currencies from an API
  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${inputCurrency}`
        );
        setCurrencies(Object.keys(response.data.rates)); // Get list of currencies
        setExchangeRate(response.data.rates[outputCurrency]); // Set the rate for selected currencies
        setConvertedAmount(amount * response.data.rates[outputCurrency]); // Calculate initial conversion
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };
    fetchCurrencyData();
  }, [inputCurrency, outputCurrency, amount]);

  // Handle swapping input and output currencies
  const handleSwap = () => {
    const temp = inputCurrency;
    setInputCurrency(outputCurrency);
    setOutputCurrency(temp);
  };

  // Update converted amount when input amount or currencies change
  useEffect(() => {
    setConvertedAmount((amount * exchangeRate).toFixed(2));
  }, [amount, exchangeRate]);

  return (
    <div className="py-6 text-white w-full rounded-lg shadow-md">

      {/* Input Currency Section */}
      <h1 className="text-xl w-full text-start font-semibold mb-6">Currency Converter</h1>

     <div className="flex justify-center items-center gap-1">
     <div className="flex items-center mb-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 w-20 bg-gray-700 border border-gray-600 rounded-md text-white"
        />
        <select
          value={inputCurrency}
          onChange={(e) => setInputCurrency(e.target.value)}
          className="ml-4 p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      {/* Swap Button */}
      <div className="text-center mb-4">
        <button
          onClick={handleSwap}
          className="p-1 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700"
        >
          <IoIosSwap className="h-4 w-4" />
        </button>
      </div>

      {/* Output Currency Section */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={convertedAmount}
          readOnly
          className="p-2 w-20 bg-gray-700 border border-gray-600 rounded-md text-white"
        />
        <select
          value={outputCurrency}
          onChange={(e) => setOutputCurrency(e.target.value)}
          className="ml-4 p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
     </div>

     
    </div>
  );
};

export default CurrencyConverter;
