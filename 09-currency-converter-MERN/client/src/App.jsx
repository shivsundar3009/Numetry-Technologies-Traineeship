import { useState, useEffect } from "react";
import usecurrencyInfo from "./hooks/usecurrencyInfo";
import { Input } from "./components/index";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('INR');
  const [to, setTo] = useState('USD');
  const [options, setOptions] = useState([]);

  const data = usecurrencyInfo(from);

  useEffect(() => {
    // Check if data has been fetched and set options accordingly
    if (Object.keys(data).length > 0) {
      setOptions(Object.keys(data));
    }
  }, [data]);

  useEffect(() => {
    // Set default value for 'from' state when options are available
    if (options.length > 0 && !from) {
      setFrom(options[0]);
    }
  }, [options, from]);

  const handleFromCurrencyChange = (currency) => {
    setFrom(currency);
  };

  const handleToCurrencyChange = (currency) => {
    setTo(currency);
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
            />
            <Input
              label="To"
              currencyOptions={options}
              onCurrencyChange={handleToCurrencyChange}
            />
          </div>
          <div>
            <button
              type="button"
              className="bg-blue-500 p-3 rounded-lg border-2 border-transparent hover:bg-white hover:text-blue-500 hover:border-blue-500"
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
