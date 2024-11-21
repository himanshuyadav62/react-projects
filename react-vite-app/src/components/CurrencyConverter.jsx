import { useState, useEffect } from 'react';
import CurrencyCard from './CurrencyCard';

export default function CurrencyConverter() {
  const [symbols, setSymbols] = useState({});

  const fetchSymbols = async () => {
    const url = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'c4b378a6a8msh304bdbb489acb07p15291ajsn2296f75d2cfe',
        'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result.symbols;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getSymbols = async () => {
      const symbolsData = await fetchSymbols();
      setSymbols(symbolsData);
    };
    getSymbols();
  }, []);

  return (
    <div className="container">
      <CurrencyCard data={symbols} />
    </div>
  );
}