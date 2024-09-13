import React from "react"

function InputBox({
    // These are props
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value = {amount}

                    // If onAmountChange is not provided (i.e., it's undefined or null), the rest of the expression will not run, preventing errors from calling an undefined function.
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                    // Number(e.target.value) converts this value (which is a string by default) into a number using the Number function.

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                >
                {/* Remeber the keys in loop in react because it will enhance the performance. */
                    
                    currencyOptions.map((currency)=>{
                        <option key={currency} value={currency}>
                           {currency}
                        </option>
                    })
                    
                }
                        
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;