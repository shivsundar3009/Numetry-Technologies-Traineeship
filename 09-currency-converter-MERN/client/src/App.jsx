import { useEffect, useState } from "react";
import axios from "axios";
import useCurrencyInfo from "./hooks/usecurrencyInfo.js";
import { Input } from "./components/index";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const data = useCurrencyInfo(from);

  const [options, setOptions] = useState([])
  // const options = Object.keys(data);

  useEffect(() => {
    if (data) {
      setOptions(Object.keys(data)); // Update currency options when data changes
    }
  }, [data])

  const handleFromCurrencyChange = (currency) => {
    console.log(currency);
    setFrom(currency);
  };``

  const handleToCurrencyChange = (currency) => {
    console.log(currency);
    setTo(currency);
  };

  const convertCurrency = async () => {
    try {
      const response = await axios.post("http://localhost:3000/convert", {
        fromCurrency: from,
        toCurrency: to,
        amount: amount,
      });
      setConvertedAmount(response.data.convertedAmount);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center bg-[url('./assets/currency.jpg')] h-screen">
        <div className="bg-[#023047] h-80 w-1/2 mr-32 mt-10 text-white p-10 flex flex-col justify-around items-center">
          <h1 className="text-2xl">Currency Converter</h1>
          <div className="flex gap-5 h-1/2 bg-[#ffb703] p-5">
            <Input
              label="From"
              amount={amount}
              currencyOptions={options}
              onAmountChange={setAmount}
              onCurrencyChange={handleFromCurrencyChange}
              selectCurrency={from}
            />
            <Input
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={handleToCurrencyChange}
              selectCurrency={to}
            />
          </div>
          <div>
            <button
              type="button"
              className="bg-blue-500 p-3 rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-500 hover:border-blue-500"
              onClick={convertCurrency}
            >
              CONVERT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;




