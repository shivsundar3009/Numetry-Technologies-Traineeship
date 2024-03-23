import { useEffect, useState } from 'react';
import axios from 'axios';

function usecurrencyInfo(fromcurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/getCurrencyConversion/${fromcurrency}`);
        setData(response.data);
        console.log(response.data)
        console.log('fetch data working');
      } catch (error) {
        console.log('error in getting conversion rates');
      }
    };

    fetchData();
  }, [fromcurrency]); // Ensure useEffect re-runs when fromcurrency changes

  return data;
}

export default usecurrencyInfo;
