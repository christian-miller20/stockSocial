import axios from 'axios';

// may be impractical due to database constraints
// if this was adv db. we could have a table of all stocks
// to reduce api calls
export const getAllStocks = async () => {
  const apiKey = '942d8f501f25a9ffeacffaafbbdd8270';
  const url = `https://financialmodelingprep.com/api/v3/available-traded/list?apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    console.log('Data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const getAStock = async (query) => {
    const apiKey = '942d8f501f25a9ffeacffaafbbdd8270';
    const url = `https://financialmodelingprep.com/api/v3/search-ticker?exchange=${query}&apikey=${apiKey}`;

    try {
        const response = await axios.get(url);
        console.log('Data:', response.data);
    } catch (error) {
        console.error('Error:', error);
    }
};

export const getDailyChartData = async () => {
  const apiKey = '942d8f501f25a9ffeacffaafbbdd8270';
  const company = 'AAPL';
  const toDate = '2023-10-01';
  const fromDate = '2020-10-10';
  const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${company}&apikey=${apiKey}`;

  try{
    const response = await axios.get(url);
    console.log('Data:', response.data);
  } catch (error) {
    console.log('Error:', error);
  }
}