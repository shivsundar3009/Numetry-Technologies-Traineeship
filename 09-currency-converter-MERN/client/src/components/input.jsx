import React from 'react'

function Input({
  amount,
  onAmountChange,
  amountDisabled = false,
  selectCurrency='USD',
  onCurrencyChange,
  label,
  currencyOptions,
  currencyDisabled
  
}) {

  return (

 
    <>
      <div className='flex flex-col justify-around'>

        <div className='flex gap-2'>

        <label htmlFor="">{label}</label>
        <input 
        className='text-black p-2'
        type="number"
        value={amount}
        onChange={e => onAmountChange && onAmountChange(Number(e.target.value))}
        disabled={amountDisabled}

         />

        </div>

        <div className='flex justify-between'>

          <p>Curreny Type</p>
          <select 
          className='bg-gray-600 p-1 rounded'
          name='currency'
          id='currency'
          value={selectCurrency}
          onChange={e => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
         
          >
            {
              currencyOptions.map(
               (currency) => (
                <option value={currency} key={currency}>{currency}</option > 
               )
              )
            }
          </select>


        </div>

      </div>
    </>

  )
}

export default Input