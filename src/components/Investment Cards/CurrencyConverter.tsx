"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoIosSwap } from "react-icons/io";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState<number>(1);
  const [convertedAmount, setConvertedAmount] = useState<string>("0");
  const [inputCurrency, setInputCurrency] = useState<string>("USD");
  const [outputCurrency, setOutputCurrency] = useState<string>("INR");
  const [currencies, setCurrencies] = useState<string[]>([]); // Explicitly define as string[]
  const [exchangeRate, setExchangeRate] = useState<number>(1);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${inputCurrency}`
        );
        setCurrencies(Object.keys(response.data.rates));
        setExchangeRate(response.data.rates[outputCurrency]);
        setConvertedAmount((amount * response.data.rates[outputCurrency]).toFixed(2));
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };
    fetchCurrencyData();
  }, [inputCurrency, outputCurrency, amount]);

  const handleSwap = () => {
    const temp = inputCurrency;
    setInputCurrency(outputCurrency);
    setOutputCurrency(temp);
  };

  useEffect(() => {
    setConvertedAmount((amount * exchangeRate).toFixed(2));
  }, [amount, exchangeRate]);

  return (
    <div className="py-6 text-white w-full rounded-lg shadow-md">
      <h1 className="text-xl w-full text-start font-semibold mb-6">
        Currency Converter
      </h1>

      <div className="flex justify-center items-center gap-1">
        <div className="flex items-center mb-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))} // Ensure value is a number
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

        <div className="text-center mb-4">
          <button
            onClick={handleSwap}
            className="p-1 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700"
          >
            <IoIosSwap className="h-4 w-4" />
          </button>
        </div>

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
