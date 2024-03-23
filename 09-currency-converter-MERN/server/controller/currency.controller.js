import CurrencyConversion from '../models/ConversionRates.model.js';

// Controller logic to handle currency conversion requests
export const convertCurrency = async (req, res) => {
  try {
    const { fromCurrency, toCurrency, amount } = req.body;
    const conversionData = await CurrencyConversion.findOne({ fromCurrency });

    if (!conversionData) {
      return res.status(404).json({ message: "Conversion data not found" });
    }

    const conversionRate = conversionData.toCurrency.get(toCurrency);
    if (!conversionRate) {
      return res.status(404).json({ message: "Conversion rate not found for the specified currency" });
    }

    const convertedAmount = amount * conversionRate;
    res.status(200).json({ convertedAmount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const addConversion = async (req, res) => {
  try {
    const { fromCurrency, toCurrency } = req.body;

    // Check if the fromCurrency already exists in the database
    const existingConversion = await CurrencyConversion.findOne({ fromCurrency });

    if (existingConversion) {
      return res.status(400).json({ message: "Currency already exists. Please update the existing conversion rate." });
    }

    // If the fromCurrency doesn't exist, create a new conversion entry
    const conversionData = new CurrencyConversion({
      fromCurrency,
      toCurrency
    });

    await conversionData.save();
    return res.status(201).json({ message: "Conversion rate added successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getAllConversions = async (req, res) => {
  try {
    const conversionData = await CurrencyConversion.find();
    res.status(200).json({ conversionData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getCurrencyConversion = async (req, res) => {
  const { fromCurrency } = req.params; // Assuming fromCurrency is passed as a parameter

  try {
    // Finding the currency conversion object based on fromCurrency
    const currencyConversion = await CurrencyConversion.findOne({ fromCurrency });

    if (!currencyConversion) {
      return res.status(404).json({ message: 'Currency conversion not found for the provided fromCurrency.' });
    }

    // Returning the toCurrency object
    return res.status(200).json(currencyConversion.toCurrency);
  } catch (error) {
    console.error('Error fetching currency conversion:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


// Controller logic to update conversion rates for a currency
export const updateConversion = async (req, res) => {
    try {
      const { fromCurrency, toCurrency, rate } = req.body;
      const conversionData = await CurrencyConversion.findOne({ fromCurrency });
  
      if (!conversionData) {
        return res.status(404).json({ message: "Conversion data not found" });
      }
  
      conversionData.toCurrency.set(toCurrency, rate);
      await conversionData.save();
      res.status(200).json({ message: "Conversion rate updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };

// Controller logic to delete conversion rates for a currency
export const deleteConversionRate = async (req, res) => {
  try {
    const { fromCurrency, toCurrency } = req.body;
    const conversionData = await CurrencyConversion.findOne({ fromCurrency });

    if (!conversionData) {
      return res.status(404).json({ message: "Conversion data not found" });
    }

    conversionData.toCurrency.delete(toCurrency);
    await conversionData.save();

    res.status(200).json({ message: "Conversion rate deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};