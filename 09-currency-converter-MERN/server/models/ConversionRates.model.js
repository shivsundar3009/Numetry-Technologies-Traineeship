import mongoose from 'mongoose';

const CurrencyConversionSchema = new mongoose.Schema({
  fromCurrency: String,
  toCurrency: {
    type: Map,
    of: Number
  }
},{timestamps:true});

export default mongoose.model('CurrencyConversion', CurrencyConversionSchema);