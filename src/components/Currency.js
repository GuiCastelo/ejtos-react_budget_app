import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrency = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY', 
            payload: currency
        })
    }

    return (
        <div style={{
            backgroundColor: 'lightgreen', 
            paddingLeft: '3px', 
            height: '3rem', 
            textAlign: 'center',
            paddingTop: '0.65rem',
            }}
            className="text-white">
            <label htmlFor="CurrencySelect">Currency: </label>
            <select style={{
                        width: '100px', 
                        backgroundColor: 'lightgreen',
                        paddingLeft: '7px', 
                        marginLeft: '5px'                        
                    }}
                    className="text-white"
                    id="CurrencySelect" 
                    onChange={(e) => handleCurrency(e.target.value)}>
                <option className="text-black" value='$' name="dolar">$ Dollar</option>
                <option className="text-black" value='£' selected name="pound">£ Pound</option>
                <option className="text-black" value='€' name="euro">€ Euro</option>
                <option className="text-black" value='₹' name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    )
};

export default Currency;