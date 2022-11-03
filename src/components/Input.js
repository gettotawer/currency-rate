import React from 'react';

function Input(props) {

    return (
      <div className="inputField">
        <form onKeyDown={props.onEnterDown}>
            <input value={props.inputValue}  name="inputField__input" type="text" className="input" minLength="2" maxLength="40" placeholder="15 usd in rub" required onChange={props.handleInputValueChange}/>
        </form>
      </div>
    );
  }
  
  export default Input;