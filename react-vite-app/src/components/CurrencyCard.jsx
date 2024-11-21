import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";

export default function CurrencyCard({ data }) {
  const [currencyData1, setCurrencyData1] = useState({
    currSymbol: "USD",
    currName: "United States Dollar",
    currValue: 1,
  });
  const [currencyData2, setCurrencyData2] = useState({
    currSymbol: "EUR",
    currName: "Euro",
    currValue: null,
  });

  const fetchCurrencyData = useCallback(async (from, to, amount) => {
    const url = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${amount}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c4b378a6a8msh304bdbb489acb07p15291ajsn2296f75d2cfe",
        "x-rapidapi-host":
          "currency-conversion-and-exchange-rates.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.success) {
        return result.result;
      } else {
        console.error("API error:", result);
        return null;
      }
    } catch (error) {
      console.error("Fetch error:", error);
      return null;
    }
  }, []);

  useEffect(() => {
    const fetchInitialCurrencyData = async () => {
      const initialCurrencyValue = await fetchCurrencyData(
        currencyData1.currSymbol,
        currencyData2.currSymbol,
        currencyData1.currValue
      );

      if (initialCurrencyValue !== null) {
        setCurrencyData2((prevState) => ({
          ...prevState,
          currValue: initialCurrencyValue,
        }));
      }
    };
    console.log("use Effect called");

    fetchInitialCurrencyData();
    // Only run this effect when the initial symbols or value change
  }, [
    currencyData1.currSymbol,
    currencyData2.currSymbol,
    currencyData1.currValue,
    fetchCurrencyData,
  ]);

  const handleCurrencyChange = async (e, data1, data2, setData1) => {
    const currencySymbol = e.target.value;
    const currencyName = data[currencySymbol];
      setData1({
        currSymbol: currencySymbol,
        currName: currencyName,
        currValue: data1.currValue,
      });
      console.log("currency changed and updated state");
  };

  const handleValueChange = async (e, data1, setData1) => {
    const value = parseFloat(e.target.value) || 1;
    setData1({
      ...data1,
      currValue: value,
    });
    console.log("value changed and updated state");
  };

  const switchCurrency = async () => {
    const curreny1 = { ...currencyData1 };
    setCurrencyData1({
      currSymbol: currencyData2.currSymbol,
      currName: currencyData2.currName,
      currValue: currencyData1.currValue,
    });
    setCurrencyData2({
      currSymbol: curreny1.currSymbol,
      currName: curreny1.currName,
      currValue: null,
    });
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Currency 1 */}
      <div className="flex items-center gap-4 bg-orange-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <select
          className="border-2 border-orange-500 rounded-md p-2 bg-white text-gray-800 focus:outline-none focus:ring focus:ring-orange-400"
          value={currencyData1.currSymbol}
          onChange={(e) =>
            handleCurrencyChange(
              e,
              currencyData1,
              currencyData2,
              setCurrencyData1
            )
          }
        >
          {Object.entries(data).map(([symbol, name]) => (
            <option key={symbol} value={symbol}>
              {name}
            </option>
          ))}
        </select>
        <span className="font-bold text-lg text-gray-900">
          {currencyData1.currSymbol}
        </span>
        <input
          type="number"
          value={currencyData1.currValue || ""}
          onChange={(e) =>
            handleValueChange(e, currencyData1, setCurrencyData1)
          }
          className="border-2 border-orange-500 rounded-md p-2 text-right text-gray-800 focus:outline-none focus:ring focus:ring-orange-400"
        />
      </div>

      <button
        className="text-orange-500 font-bold text-2xl bg-orange-100 p-2 rounded-md hover:bg-orange-200"
        onClick={() => switchCurrency()}
      >
        ⥮
      </button>

      {/* Currency 2 */}
      <div className="flex items-center gap-4 bg-orange-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <select
          className="border-2 border-orange-500 rounded-md p-2 bg-white text-gray-800 focus:outline-none focus:ring focus:ring-orange-400"
          value={currencyData2.currSymbol}
          onChange={(e) =>
            handleCurrencyChange(
              e,
              currencyData2,
              currencyData1,
              setCurrencyData2,
              setCurrencyData1
            )
          }
        >
          {Object.entries(data).map(([symbol, name]) => (
            <option key={symbol} value={symbol}>
              {name}
            </option>
          ))}
        </select>
        <span className="font-bold text-lg text-gray-900">
          {currencyData2.currSymbol}
        </span>
        <input
          type="number"
          value={currencyData2.currValue || ""}
          readOnly
          className="border-2 border-orange-500 rounded-md p-2 text-right text-gray-800 bg-gray-100"
        />
      </div>
    </div>
  );
}

CurrencyCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
