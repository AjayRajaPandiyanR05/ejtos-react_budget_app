import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropDown = (props) => {
    const { dispatch  } = useContext(AppContext);

    const submitEvent = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        <div style={{height : "70%", display : 'flex', alignItems : 'center', justifyContent : 'center',backgroundColor : "darkgreen",borderRadius : "5px"}}>
        <label style={{backgroundColor : "darkgreen",color : 'white', height : "100%", padding : 0, border : 0}} className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
        <select style={{backgroundColor : "darkgreen", height : "100%", border : "1px solid darkgreen",width :"70%", borderRadius : "5px", color : 'white'}} className="custom-select" id="inputGroupSelect01" onChange={submitEvent}>
            <option value="£" name="£">£ Pound</option>
            <option value="$" name="$">$ Dollar</option>
            <option value="€" name="€">€ Euro</option>
            <option value="₹" name="₹">₹ Rupee</option>
        </select>
        
        </div>
    );
};

export default CurrencyDropDown;
